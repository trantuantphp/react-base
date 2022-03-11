module.exports = {
    content: ["./src/**/*.js", "./src/**/*.jsx"],
    theme: {
        screen: {
            xxs: "320px",
            xs: "414px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1366px",
            xxl: "1600px",
        },
        keyframes: {
            spin: {
                to: {
                    transform: "rotate(360deg)",
                },
            },
            ping: {
                "75%, 100%": {
                    transform: "scale(2)",
                    opacity: "0",
                },
            },
            pulse: {
                "50%": {
                    opacity: ".5",
                },
            },
            bounce: {
                "0%, 100%": {
                    transform: "translateY(-25%)",
                    animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
                },
                "50%": {
                    transform: "none",
                    animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
                },
            },
        },
        animation: {
            none: "none",
            spin: "spin 1s linear infinite",
            ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
            pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            bounce: "bounce 1s infinite",
        },
        colors: {
            primary: "#1890FF",
            ghost: "#000006",
            white: "#fff",
            "black-30": "#00000030",
            "black-45": "#00000045",
            "black-60": "#00000060",
        },
        borderWidth: {
            DEFAULT: "1px",
            0: "0px",
            2: "2px",
            3: "3px",
            4: "4px",
            8: "8px",
        },
        fontWeight: {
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
        },
        boxShadow: {
            content: "0px 4px 4px rgba(1, 39, 66, 0.03), 0px 4px 16px rgba(1, 39, 66, 0.05)",
        },
    },
    plugins: [],
};
