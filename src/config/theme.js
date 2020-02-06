const theme = {
    colors: {
        primary: {
            main: "#BC9CFF",
            light: "rgba(188, 156, 255, 0.25)"
        },

        secondary: {
            main: "#6FCF97",
            dark: "#256C43"
        },

        grey: {
            100: "#1F2041",
            75: "#0d0e1a",
            50: "#8f8fa0",
            25: "#c7c7cf",
            5: "#f4f4f5"
        }
    },
    
    typography: {
        fontFamily: "Quicksand, sans-serif",
        
        h1: {
            fontSize: "42px",
            color: "#1F2041"
        },

        h2: {
            fontSize: "32px",
            color: "#1F2041"
        },

        h3: {
            fontSize: "24px",
            color: "#1F2041"
        },

        h4: {
            fontSize: "19px",
            color: "#1F2041"
        },

        h5: {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "normal",
            fontSize: "14px",
            color: "#0d0e1a"
        },

        h6: {
            fontFamily: "Montserrat, sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            color: "#0d0e1a"
        }
    },

    gradients: {
        primary: {
            main: "linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)",
            reverse: "linear-gradient(180deg, #95A2FB 0%, #B69DFF 100%)"
        },

        secondary: {
            main: "linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)",
            reverse: "linear-gradient(180deg, #66D2EA 0%, #6FCF97 100%)"
        }
    },

    shadows: {
        main: "0px 10px 20px rgba(31, 32, 64, 0.1)",
        light: "0px 10px 20px rgba(31, 32, 64, 0.05)",
        dark: "0px 10px 20px rgba(31, 32, 64, 0.15)"
    }
}
export default theme;