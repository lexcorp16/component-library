module.exports = {
  theme: {
    colors: {
      defaultGreen: "#3bb75e",
      activeGreen: "#35a454",
      borderDefault: "#3bb75e",
      borderActive: "#31984e"
    },
    opacity: {
      "65": "0.65"
    },
    fontSize: {
      sm: "12px"
    },
    borderRadius: {
      sm: "3px"
    },
    padding: {
      sm: "12px"
    },
    spacing: {
      sm: "29px"
    },
    extend: {}
  },
  variants: {},
  plugins: [
    function({ addVariant, e }) {
      addVariant("disabled", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}:disabled`;
        });
      });
    }
  ]
};
