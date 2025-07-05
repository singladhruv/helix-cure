import React, { useRef, useState, useEffect } from "react";
import "./Meeting.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Meeting() {
  const { roomid } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const zpRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [joined, setJoined] = useState(false);
  const [callType, setCallType] = useState(""); // State to store the call type

  // Initialize ZegoUIKit and join room on component mount
  const myMeeting = (type) => {
    
    const appID = Number(import.meta.env.VITE_APPID);
    const serverSecret = import.meta.env.VITE_SERVERSECRET;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(),
      "Your Name"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zpRef.current = zp;

    zp.joinRoom({
      container: videoContainerRef.current,
      sharedLinks: [
        {
          name: "Video Call Link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?type=" + encodeURIComponent(type),
        },
      ],
      scenario: {
        mode:
          type === "one-on-one" ? ZegoUIKitPrebuilt.OneONoneCall : ZegoUIKitPrebuilt.GroupCall,
      },
      maxUsers: type === "one-on-one" ? 2 : 10,
      onJoinRoom: () => {
        setJoined(true);
      },
      onLeaveRoom: () => {
        window.scrollTo(0, 0);
        navigate("/");
      },
    });
  };

  // Handle exit from the room
  const handleExit = () => {
    if (zpRef.current) {
      zpRef.current.destroy();
    }
    window.scrollTo(0, 0);
   navigate("/", { replace: true });
   window.location.reload(); // Force hard reload
  };

  // On component mount, extract call type from location and initialize meeting
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const type = query.get("type");

    setCallType(type || "one-on-one");
  }, [location.search]);

  // Initialize meeting after callType state is set
  useEffect(() => {
    if (callType && videoContainerRef.current) {
      myMeeting(callType);
    }

    // Cleanup function for component unmount
    return () => {
      if (zpRef.current) {
        zpRef.current.destroy();
      }
    };
  }, [callType, roomid, navigate]);

  return (
    <div className="room-container">
      {!joined && (
        <>
         <div className="header">
          <header className="room-header">
          {callType === "one-on-one" ? "One-on-One Video Call" : "Group Video Call"}
          </header>
          <button className="exit-button" onClick={handleExit}>
            Exit
          </button>
          </div>
        </>
      )}
      <div ref={videoContainerRef} className="video-container" />
    </div>
  );
}

export default Meeting;