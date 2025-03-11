import { useEffect, useState } from "react";

const InstagramEmbed = ({ ig_shortcode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      document.body.appendChild(script);
    }
  }, []);

  if (!isClient) {
    return <p>Loading...</p>; // Avoid SSR mismatch
  }

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={`https://www.instagram.com/p/${ig_shortcode}/?utm_source=ig_embed&amp;utm_campaign=loading`}
      style={{
        background: "#FFF",
        border: "0",
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: "0",
        width: "calc(100% - 2px)",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href={`https://www.instagram.com/p/${ig_shortcode}/?utm_source=ig_embed&amp;utm_campaign=loading`}
          style={{
            background: "#FFFFFF",
            lineHeight: "0",
            padding: "0 0",
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#F4F4F4",
                borderRadius: "50%",
                flexGrow: 0,
                height: "40px",
                marginRight: "14px",
                width: "40px",
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: 0,
                  height: "14px",
                  marginBottom: "6px",
                  width: "100px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: 0,
                  height: "14px",
                  width: "60px",
                }}
              ></div>
            </div>
          </div>
          <div style={{ padding: "19% 0" }}></div>
          <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}>
            {/* SVG Placeholder */}
          </div>
          <div style={{ paddingTop: "8px" }}>
            <div
              style={{
                color: "#3897f0",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 550,
                lineHeight: "18px",
              }}
            >
              View this post on Instagram
            </div>
          </div>
          <div style={{ padding: "12.5% 0" }}></div>
        </a>
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;
