import createTheme from "./createTheme";

const colors = {
  primary: "white",
  secondary: "#25313e",
  tertiary: "#25313e",
  quaternary: "#CECECE"
};

const factor = process.env.FONT_FACTOR || 1.0;
const primaryFont = "Montserrat";
const secondaryFont = "Helvetica";

const numberToRem = (n) => `${(n * factor).toString()}rem`;
const theme = createTheme(colors, {
  primary: primaryFont,
  secondary: secondaryFont
}, {
  progress: {
    pacmanTop: {
      background: colors.quaternary
    },
    pacmanBottom: {
      background: colors.quaternary
    },
    point: {
      borderColor: colors.quaternary
    }
  },
  components: {
    heading: {
      h1: {
        fontSize: numberToRem(3),
        textTransform: "uppercase"
      },
      h2: {
        fontSize: numberToRem(2.5),
        textTransform: "uppercase",
        paddingBottom: numberToRem(1.5)
      },
      h3: {
        fontSize: numberToRem(2),
        textTransform: "uppercase"
      },
      h4: {
        fontSize: numberToRem(1.8),
        textTransform: "uppercase"
      },
      h5: {
        fontSize: numberToRem(1.5),
        textTransform: "uppercase"
      },
      h6: {
        fontSize: numberToRem(1.2),
        textTransform: "uppercase"
      }
    },
    codePane: {
      fontSize: numberToRem(0.8),
      color: "red"
    },
    listItem: {
      fontSize: numberToRem(1.8)
    },
    tableHeaderItem: {
      fontSize: numberToRem(1.8)
    },
    tableItem: {
      fontSize: numberToRem(1.8)
    },
    text: {
      fontSize: numberToRem(1.8)
    },
    code: {
      color: "red"
    }
  }
});

export default theme;
