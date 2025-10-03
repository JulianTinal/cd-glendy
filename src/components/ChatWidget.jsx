import React, { useState, useEffect, useRef, useCallback } from 'react';

const ChatWidget = () => {
    const [config] = useState({
  "bubble": {
    "backgroundColor": "#ffc8b8",
    "iconUrl": "https://www.svgrepo.com/show/499622/message-round.svg",
    "iconSize": 60,
    "iconBorderRadius": 15,
    "internalIconColor": "#373434",
    "size": 60,
    "rightPosition": 20,
    "bottomPosition": 20,
    "borderRadius": "rounded",
    "autoOpen": false,
    "autoOpenDelay": 2
  },
  "window": {
    "headerBackgroundColor": "#ffc8b8",
    "headerTextColor": "#373434",
    "headerIconUrl": "https://www.svgrepo.com/show/499622/message-round.svg",
    "borderRadius": "rounded",
    "avatarSize": 40,
    "avatarBorderRadius": 25,
    "messageBorderRadius": 6,
    "backgroundColor": "#ffffff",
    "showTitleSection": true,
    "title": "N8N Chat UI Bot",
    "welcomeMessage": "Hello! This is the default welcome message",
    "customErrorMessage": "Please connect me to n8n first",
    "starterSuggestions": [
      "¿Quién eres?",
      "¿Qué haces?"
    ],
    "starterSuggestionsFontSize": 14,
    "clearChatOnReload": false,
    "showScrollbar": true,
    "height": 600,
    "width": 400,
    "fontSize": 16
  },
  "tooltip": {
    "enabled": false,
    "message": "Hola 👋 personalízame y conéctame a n8n",
    "backgroundColor": "#ffffff",
    "textColor": "#1c1c1c",
    "fontSize": 15
  },
  "messages": {
    "bot": {
      "backgroundColor": "#F97045",
      "textColor": "#ffffff",
      "showAvatar": true,
      "avatarUrl": "https://www.svgrepo.com/show/448936/assistant.svg"
    },
    "user": {
      "backgroundColor": "#F1F1F1",
      "textColor": "#3D3D3D",
      "showAvatar": true,
      "avatarUrl": "https://www.svgrepo.com/show/532363/user-alt-1.svg"
    }
  },
  "input": {
    "borderRadius": 8,
    "placeholder": "Escribe tu mensaje...",
    "backgroundColor": "#ffffff",
    "textColor": "#000000",
    "sendButtonColor": "#F97045",
    "sendButtonBorderRadius": 50,
    "maxChars": 50,
    "maxCharsWarning": "Superó el límite de caracteres. Ingrese menos de 50 caracteres.",
    "autoFocus": false
  },
  "fileUpload": {
    "enabled": false,
    "acceptedFileTypes": [
      "pdf",
      "jpeg",
      "png"
    ],
    "maxFileSize": 5,
    "maxFiles": 5
  },
  "voiceInput": {
    "enabled": false,
    "maxRecordingTime": 15,
    "notSupportedMessage": "Para grabar audio, usa navegadores modernos como Chrome o Firefox que soporten la grabación de audio."
  },
  "footer": {
    "enabled": true,
    "text": "Widget de chat personalizable y gratuito para n8n | n8nchatui.com",
    "link": "https://n8nchatui.com",
    "color": "#888888"
  },
  "homeScreen": {
    "webhookUrl": "https://deploy-agent-n8n.voxf0z.easypanel.host/webhook/57173a55-bf75-418b-a221-52bf17fd2ea7/chat",
    "welcomeTitle": "Hola 👋 | Bienvenido",
    "buttonColor": "#6B46C1",
    "buttonText": "Envíanos un mensaje",
    "finalText": "Normalmente respondemos al momento 😎"
  },
  "webhook": {
    "url": "https://deploy-agent-n8n.voxf0z.easypanel.host/webhook/57173a55-bf75-418b-a221-52bf17fd2ea7/chat",
    "route": "general"
  }
});
    const [isOpen, setIsOpen] = useState(false);
    const [isChatStarted, setIsChatStarted] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [hasInteracted, setHasInteracted] = useState(false);
    const [sessionId, setSessionId] = useState('');
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const [charCountError, setCharCountError] = useState(false);
    
    // Audio State
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const mediaRecorderRef = useRef(null);
    const recordingIntervalRef = useRef(null);


    const CHAT_STORAGE_KEY = 'n8n-chat-ui-messages-react';
    
    const icons = {
        send: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>,
        file: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05L12.25 20.24a6 6 0 0 1-8.49-8.49L12.95 2.56a4 4 0 0 1 5.66 5.66L9.42 17.41a2 2 0 0 1-2.83-2.83L15.17 6"/></svg>,
        mic: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>,
        close: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
        refresh: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v6h6"/><path d="M21 12A9 9 0 0 0 6 5.3L3 8"/><path d="M21 22v-6h-6"/><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"/></svg>,
        bot: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>,
        user: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
        defaultBubble: <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.65-3.8a9 9 0 1 1 3.56 3.56z"></path></svg>,
        messageSquare: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
      let storedSessionId = sessionStorage.getItem('n8n-chat-session-react');
      if (!storedSessionId) {
        storedSessionId = Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem('n8n-chat-session-react', storedSessionId);
      }
      setSessionId(storedSessionId);

      let loadedMessages = [];
      let loadedHasInteracted = false;
      if (!config.window.clearChatOnReload) {
        try {
          const storedState = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY));
          if (storedState) {
            loadedMessages = storedState.messages || [];
            loadedHasInteracted = storedState.hasInteracted || false;
          }
        } catch (e) {
          localStorage.removeItem(CHAT_STORAGE_KEY);
        }
      }

      setHasInteracted(loadedHasInteracted);
      if (loadedMessages.length > 0) {
        const welcomeMessage = { id: 1, text: config.window.welcomeMessage, sender: 'bot' };
        const welcomeIndex = loadedMessages.findIndex(m => m.id === 1);
        if (welcomeIndex > -1) {
            loadedMessages[welcomeIndex] = welcomeMessage;
        } else {
            loadedMessages.unshift(welcomeMessage);
        }
        setMessages(loadedMessages);
      } else {
        setMessages([{ id: 1, text: config.window.welcomeMessage, sender: 'bot' }]);
      }
      
      if (!config.homeScreen.webhookUrl) {
          setIsChatStarted(true);
      }

    }, [config.window.clearChatOnReload, config.window.welcomeMessage, config.homeScreen.webhookUrl]);

    useEffect(() => {
        if (!config.window.clearChatOnReload) {
            localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify({ messages, hasInteracted }));
        }
    }, [messages, hasInteracted, config.window.clearChatOnReload]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);
    
    useEffect(() => {
        if (isOpen && config.input.autoFocus) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, config.input.autoFocus, messages]);

    useEffect(() => {
        if (config.bubble.autoOpen) {
            const timer = setTimeout(() => {
                if (!isOpen) setIsOpen(true);
            }, config.bubble.autoOpenDelay * 1000);
            return () => clearTimeout(timer);
        }
    }, [config.bubble.autoOpen, config.bubble.autoOpenDelay, isOpen]);
    
    const isValidUrl = (url) => {
        if (!url) return false;
        try {
            new URL(url);
            return url.startsWith('http://') || url.startsWith('https://');
        } catch (_) {
            return false;
        }
    };

    const handleSendMessage = useCallback(async (text) => {
        const webhookUrl = (config.homeScreen && config.homeScreen.webhookUrl) ? config.homeScreen.webhookUrl : (config.webhook ? config.webhook.url : null);
        if (!webhookUrl) {
            console.error("Webhook URL is not configured.");
            return;
        }
        
        const messageText = (typeof text === 'string' ? text : inputValue).trim();
        if (messageText.trim() === '') return;

        if (config.input.maxChars > 0 && messageText.length > config.input.maxChars) {
            setCharCountError(true);
            return;
        }
        setCharCountError(false);

        if (!hasInteracted) {
            setHasInteracted(true);
        }
        
        const userMessage = { id: Date.now(), text: messageText, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        if (typeof text !== 'string') {
           setInputValue('');
        }

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: "sendMessage",
                    sessionId: sessionId,
                    chatInput: messageText,
                    route: config.webhook.route
                })
            });
             if (!response.ok) throw new Error('Network response was not ok.');
            const data = await response.json();
            const botResponse = { id: Date.now() + 1, text: data.output, sender: 'bot' };
            setMessages(prev => [...prev, botResponse]);
        } catch (error) {
            console.error("Error fetching N8N webhook", error);
            const errorResponse = { id: Date.now() + 1, text: config.window.customErrorMessage, sender: 'bot' };
            setMessages(prev => [...prev, errorResponse]);
        }
    }, [inputValue, hasInteracted, sessionId, config]);

    const sendAudioMessage = (audioUrl) => {
        if (!hasInteracted) setHasInteracted(true);

        const userMessage = { id: Date.now(), sender: 'user', audioUrl: audioUrl };
        setMessages(prev => [...prev, userMessage]);

        setTimeout(() => {
            const botResponse = { id: Date.now() + 1, text: config.window.customErrorMessage, sender: 'bot' };
            setMessages(prev => [...prev, botResponse]);
        }, 500);
    };

    const startRecording = async () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert(config.voiceInput.notSupportedMessage);
            return;
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            const audioChunks = [];
            mediaRecorderRef.current.ondataavailable = (event) => audioChunks.push(event.data);
            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                const audioUrl = URL.createObjectURL(audioBlob);
                sendAudioMessage(audioUrl);
                stream.getTracks().forEach(track => track.stop());
            };
            mediaRecorderRef.current.start();
            setIsRecording(true);
            setRecordingTime(0);
            recordingIntervalRef.current = setInterval(() => {
                setRecordingTime(prev => {
                    if (prev + 1 >= config.voiceInput.maxRecordingTime) {
                        stopRecording();
                    }
                    return prev + 1;
                });
            }, 1000);
        } catch (err) {
            alert("Could not access microphone. Please check browser permissions.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            mediaRecorderRef.current.stop();
        }
        setIsRecording(false);
        clearInterval(recordingIntervalRef.current);
    };

    useEffect(() => {
      return () => { // Cleanup on unmount
        if (recordingIntervalRef.current) clearInterval(recordingIntervalRef.current);
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
        }
      }
    }, []);

    const handleRefresh = () => {
        localStorage.removeItem(CHAT_STORAGE_KEY);
        sessionStorage.removeItem('n8n-chat-session-react');
        const newSessionId = Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem('n8n-chat-session-react', newSessionId);
        setSessionId(newSessionId);
        setMessages([{ id: 1, text: config.window.welcomeMessage, sender: 'bot' }]);
        setHasInteracted(false);
        setIsChatStarted(true); // Stay in chat view
    };

    const BubbleIcon = () => {
        const [error, setError] = useState(false);
        if (isValidUrl(config.bubble.iconUrl) && !error) {
            return <img src={config.bubble.iconUrl} alt="chat" style={{width: '100%', height: '100%', borderRadius: `${config.bubble.iconBorderRadius}px`, objectFit: 'cover'}} onError={() => setError(true)} />;
        }
        return icons.defaultBubble;
    }

    const HeaderIcon = () => {
        const [error, setError] = useState(false);
        if(isValidUrl(config.window.headerIconUrl) && !error) {
            return <img src={config.window.headerIconUrl} alt="header icon" style={{width: '100%', height: '100%', objectFit: 'cover' }} onError={() => setError(true)} />
        }
        return <div style={{width: `${config.window.avatarSize}px`, height: `${config.window.avatarSize}px`, color: config.window.headerTextColor}}>{icons.defaultBubble}</div>;
    }

    const MessageAvatar = ({ msg }) => {
        const isBot = msg.sender === 'bot';
        const [error, setError] = useState(false);
        const avatarUrl = isBot ? config.messages.bot.avatarUrl : config.messages.user.avatarUrl;

        if (isValidUrl(avatarUrl) && !error) {
            return <img src={avatarUrl} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={() => setError(true)} />;
        }
        return isBot ? icons.bot : icons.user;
    };
    
    const AudioPlayer = ({ src, color }) => {
      const audioRef = useRef(null);
      const [isPlaying, setIsPlaying] = useState(false);
      const [duration, setDuration] = useState(0);
      const [currentTime, setCurrentTime] = useState(0);

      useEffect(() => {
        const audio = audioRef.current;
        const setAudioData = () => setDuration(audio.duration);
        const setAudioTime = () => setCurrentTime(audio.currentTime);
        const handleEnd = () => setIsPlaying(false);

        audio.addEventListener('loadedmetadata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);
        audio.addEventListener('ended', handleEnd);
        return () => {
          audio.removeEventListener('loadedmetadata', setAudioData);
          audio.removeEventListener('timeupdate', setAudioTime);
          audio.removeEventListener('ended', handleEnd);
        }
      }, []);

      const togglePlay = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };

      const handleProgressClick = (e) => {
        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const progressBarWidth = rect.width;
        audioRef.current.currentTime = (clickPosition / progressBarWidth) * duration;
      };

      const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
      
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '15rem'}}>
          <audio ref={audioRef} src={src} preload="metadata" />
          <button onClick={togglePlay} style={{ flexShrink: 0, width: '2rem', height: '2rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', backgroundColor: color, color: 'white', cursor: 'pointer'}}>
             {isPlaying ? <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> : <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '1px' }}><path d="M8 5v14l11-7z"/></svg>}
          </button>
          <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div onClick={handleProgressClick} style={{ width: '100%', height: '0.375rem', borderRadius: '9999px', cursor: 'pointer', backgroundColor: color + '33' }}>
              <div style={{ height: '100%', borderRadius: '9999px', width: `${progress}%`, backgroundColor: color }}></div>
            </div>
            <span style={{ fontSize: '0.75rem', width: '3rem', textAlign: 'right', color: color }}>{formatTime(duration - currentTime)}</span>
          </div>
        </div>
      );
    };


    const Message = ({ msg }) => {
        const isBot = msg.sender === 'bot';
        const showAvatar = isBot ? config.messages.bot.showAvatar : config.messages.user.showAvatar;
        
        return (
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', alignSelf: isBot ? 'flex-start' : 'flex-end', flexDirection: isBot ? 'row' : 'row-reverse', maxWidth: '85%' }}>
                {showAvatar && (
                  <div style={{ width: `${config.window.avatarSize}px`, height: `${config.window.avatarSize}px`, borderRadius: `${config.window.avatarBorderRadius}px`, overflow: 'hidden', flexShrink: 0 }}>
                    <MessageAvatar msg={msg} />
                  </div>
                )}
                <div style={{
                    padding: msg.audioUrl ? '0.5rem' : '0.75rem 1rem',
                    fontSize: `${config.window.fontSize}px`,
                    lineHeight: 1.5,
                    backgroundColor: isBot ? config.messages.bot.backgroundColor : config.messages.user.backgroundColor,
                    color: isBot ? config.messages.bot.textColor : config.messages.user.textColor,
                    borderTopLeftRadius: `${config.window.messageBorderRadius}px`,
                    borderTopRightRadius: `${config.window.messageBorderRadius}px`,
                    borderBottomLeftRadius: isBot ? 0 : `${config.window.messageBorderRadius}px`,
                    borderBottomRightRadius: !isBot ? 0 : `${config.window.messageBorderRadius}px`,
                }}>
                    {msg.text && <p style={{margin: 0}}>{msg.text}</p>}
                    {msg.audioUrl && <AudioPlayer src={msg.audioUrl} color={isBot ? config.messages.bot.textColor : config.messages.user.textColor} />}
                </div>
            </div>
        );
    };

    const HomeScreen = () => (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '2rem', backgroundColor: 'white' }}>
          <h1 style={{fontSize: '1.5rem', fontWeight: 700, color: '#333', marginBottom: '1rem'}}>{config.homeScreen.welcomeTitle}</h1>
          <button 
            style={{ backgroundColor: config.homeScreen.buttonColor, color: 'white', fontWeight: 700, padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => setIsChatStarted(true)}
          >
            {icons.messageSquare}
            <span>{config.homeScreen.buttonText}</span>
          </button>
          <p style={{fontSize: '0.875rem', color: '#666', marginTop: '1rem'}}>{config.homeScreen.finalText}</p>
      </div>
    );

    return (
        <>
            <style>{ `
                @keyframes chat-widget-tooltip-fade-in-react {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .chat-widget-tooltip-react {
                    position: absolute;
                    bottom: 100%;
                    right: 0;
                    margin-bottom: 0.75rem;
                    background-color: ${config.tooltip.backgroundColor};
                    color: ${config.tooltip.textColor};
                    padding: 1rem;
                    border-radius: 0.5rem;
                    font-size: ${config.tooltip.fontSize}px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
                    white-space: nowrap;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    animation: chat-widget-tooltip-fade-in-react 0.5s ease-out forwards;
                    opacity: ${!isOpen && config.tooltip.enabled ? 1 : 0};
                    pointer-events: ${!isOpen && config.tooltip.enabled ? 'auto' : 'none'};
                    visibility: ${!isOpen && config.tooltip.enabled ? 'visible' : 'hidden'};
                }
                 @keyframes chat-widget-pulse-react {
                    50% { opacity: .5; }
                }
                @media (max-width: 480px) {
                  .chat-window-react { 
                      width: calc(100vw - 2rem) !important;
                      height: calc(100vh - 2rem - ${config.bubble.size + 10}px) !important;
                      max-width: calc(100vw - 2rem) !important;
                      max-height: calc(100vh - 2rem - ${config.bubble.size + 10}px) !important;
                      right: 1rem !important;
                      bottom: ${config.bubble.size + 20}px !important;
                      border-radius: ${config.window.borderRadius === 'rounded' ? '1rem' : '0'} !important;
                  }
                  .bubble-container { 
                    bottom: 1rem !important; 
                    right: 1rem !important; 
                  }
                  .chat-message-content-react { font-size: 1rem; }
                  .chat-header-h2 { font-size: 1.1rem !important; }
                  .chat-input-textarea { font-size: 1rem !important; }
                }
            `}</style>
            <div 
              className="bubble-container"
              style={{
                  position: 'fixed',
                  bottom: `${config.bubble.bottomPosition}px`,
                  right: `${config.bubble.rightPosition}px`,
                  width: `${config.bubble.size}px`,
                  height: `${config.bubble.size}px`,
                  backgroundColor: config.bubble.backgroundColor,
                  borderRadius: config.bubble.borderRadius === 'circle' ? '50%' : (config.bubble.borderRadius === 'rounded' ? '1rem' : '0'),
                  cursor: 'pointer',
                  zIndex: 9999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'transform 0.2s ease-in-out',
              }} 
              onClick={() => setIsOpen(!isOpen)}
            >
                <div style={{ width: `${config.bubble.iconSize}%`, height: `${config.bubble.iconSize}%`, color: config.bubble.internalIconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s' }}>
                    {isOpen ? icons.close : <BubbleIcon />}
                </div>
                { config.tooltip.enabled && !isOpen && (
                    <div className="chat-widget-tooltip-react">
                        {config.tooltip.message}
                    </div>
                )}
            </div>
            
            <div 
              className="chat-window-react"
              style={{
                position: 'fixed',
                bottom: `${config.bubble.bottomPosition + config.bubble.size + 10}px`,
                right: `${config.bubble.rightPosition}px`,
                width: `${config.window.width}px`,
                height: `${config.window.height}px`,
                maxWidth: 'calc(100vw - 2rem)',
                maxHeight: 'calc(100vh - 2rem - ${config.bubble.bottomPosition + config.bubble.size + 10}px)',
                backgroundColor: config.window.backgroundColor,
                borderRadius: config.window.borderRadius === 'rounded' ? '1rem' : '0',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                zIndex: 9998,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                pointerEvents: isOpen ? 'auto' : 'none',
              }}
            >
                {/* Header */}
                <div style={{ backgroundColor: config.window.headerBackgroundColor, color: config.window.headerTextColor, padding: '1rem', display: 'flex', justifyContent: config.window.showTitleSection ? 'space-between' : 'flex-end', alignItems: 'center', borderBottom: '1px solid #e5e7eb', flexShrink: 0 }}>
                    {config.window.showTitleSection && <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                       <div style={{width: `${config.window.avatarSize}px`, height: `${config.window.avatarSize}px`, borderRadius: `${config.window.avatarBorderRadius}px`, overflow: 'hidden'}}>
                         <HeaderIcon />
                       </div>
                        <h2 className="chat-header-h2" style={{margin: 0, fontSize: `${config.window.fontSize}px`, fontWeight: 600}}>{config.window.title}</h2>
                    </div>}
                    <div style={{display: 'flex'}}>
                        <button onClick={handleRefresh} style={{background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background-color 0.2s'}} onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>{icons.refresh}</button>
                        <button onClick={() => { setIsOpen(false); setIsChatStarted(isChatStarted); }} style={{background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background-color 0.2s'}} onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>{icons.close}</button>
                    </div>
                </div>
                
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    {config.homeScreen.webhookUrl && !isChatStarted ? <HomeScreen /> : (
                    <>
                        {/* Messages */}
                        <div style={{ flexGrow: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', scrollbarWidth: config.window.showScrollbar ? 'auto' : 'none' }}>
                            {messages.map((msg) => <Message key={msg.id} msg={msg} />)}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Starter Suggestions */}
                        {!hasInteracted && config.window.starterSuggestions.length > 0 && (
                            <div style={{ padding: '0 1rem 0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                                {config.window.starterSuggestions.map((suggestion, index) => (
                                    <button key={index} onClick={() => handleSendMessage(suggestion)} style={{ backgroundColor: '#f1f1f1', border: '1px solid #e0e0e0', borderRadius: '9999px', padding: '0.25rem 0.75rem', fontSize: `${config.window.starterSuggestionsFontSize}px`, cursor: 'pointer', transition: 'background-color 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#e0e0e0'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#f1f1f1'}>
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        )}
                        
                        {/* Input */}
                        <div style={{ padding: '0.75rem', borderTop: '1px solid #e5e7eb', backgroundColor: config.input.backgroundColor, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {charCountError && <div style={{color: '#ef4444', fontSize: '0.875rem', padding: '0 0.25rem'}}>{config.input.maxCharsWarning}</div>}
                          {isRecording ? (
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: '#fee2e2'}}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                    <div style={{width: '1.25rem', height: '1.25rem', color: '#ef4444', animation: 'chat-widget-pulse-react 1.5s infinite' }}>{icons.mic}</div>
                                    <span style={{ color: '#b91c1c', fontWeight: 500 }}>{formatTime(recordingTime)}</span>
                                </div>
                                <button onClick={stopRecording} style={{backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '0.25rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.875rem', cursor: 'pointer'}}>Stop</button>
                            </div>
                          ) : (
                          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                              <textarea
                                  ref={inputRef}
                                  value={inputValue}
                                  onChange={(e) => {
                                    setInputValue(e.target.value);
                                    if (config.input.maxChars > 0 && e.target.value.length > config.input.maxChars) {
                                        setCharCountError(true);
                                    } else {
                                        setCharCountError(false);
                                    }
                                  }}
                                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                                  placeholder={config.input.placeholder}
                                  rows={1}
                                  className="chat-input-textarea"
                                  style={{ flexGrow: 1, border: '1px solid #d1d5db', padding: '0.5rem', paddingRight: `${(config.voiceInput.enabled && config.fileUpload.enabled) ? '8.5rem' : '6.5rem'}`, outline: 'none', color: config.input.textColor, resize: 'none', borderRadius: `${config.input.borderRadius}px`, backgroundColor: 'transparent', lineHeight: 1.5, transition: 'border-color 0.2s, box-shadow 0.2s' }}
                              />
                              <div style={{position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                  {config.voiceInput.enabled && <button onClick={isRecording ? stopRecording : startRecording} style={{background:'none', border:'none', cursor:'pointer', color: config.input.sendButtonColor, width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background-color 0.2s'}} onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>{icons.mic}</button>}
                                  {config.fileUpload.enabled && <button style={{background:'none', border:'none', cursor:'pointer', color: config.input.sendButtonColor, width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background-color 0.2s'}} onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>{icons.file}</button>}
                                  <button onClick={() => handleSendMessage()} style={{ backgroundColor: config.input.sendButtonColor, color: 'white', border: 'none', borderRadius: `${config.input.sendButtonBorderRadius}px`, width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'opacity 0.2s' }}>
                                      <div style={{ marginLeft: '2px' }}>{icons.send}</div>
                                  </button>
                              </div>
                          </div>
                          )}
                           {config.footer.enabled && config.footer.text && (
                            <div style={{textAlign: 'center', fontSize: '0.75rem'}}>
                              <a href={config.footer.link} target="_blank" rel="noopener noreferrer" style={{color: config.footer.color, textDecoration: 'none'}}>
                                {config.footer.text}
                              </a>
                            </div>
                          )}
                        </div>
                    </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ChatWidget;