import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";

export const HTML_TAGS = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  BODY_1: "body1",
  BODY_2: "body2",
  INHERIT: "inherit",
  BUTTON: "button",
  OVERLINE: "overline",
  CAPTION: "caption",
  SUBTITLE_1: "subtitle1",
  SUBTITLE_2: "subtitle2",
};

export const COLORS = {
  PRIMARY: "#609966",
  SECONDARY: "#EDF1D6",
  LIGHT_GREEN: "#9DC08B",
  BRIGHT_GREEN: "#08893C",
  DARK_GREEN: "#40513B",
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  LIGHT_GREY: "#FFFFFF20",
  RED: "#D83A56",
};

export const ICONS = {
  POT: Inventory2OutlinedIcon,
  PLANT: LocalFloristOutlinedIcon,
  SOIL: GrainOutlinedIcon,
  LIGHT: LightModeOutlinedIcon,
  WATER: OpacityOutlinedIcon,
  HUMIDITY: WaterOutlinedIcon,
};

export const TEXT_ALIGN = {
  CENTER: "center",
  LEFT: "left",
  RIGHT: "right",
  INHERIT: "inherit",
  JUSTIFY: "justify",
};

export const TEXT_FIELD_TYPE = {
  PASSWORD: "password",
  TEXT: "text",
  DATE: "date",
  NUMBER: "number",
};

export const FREE_PURCHASE_COUPON = "MACSTI2023";

export const PAYMENT_STATUS = {
  SUCCESS: "success",
  FAIL: "fail",
  RETRY: "retry",
};

export const BUTTON_ALIGN = {
  CENTER: "center",
  LEFT: "left",
  RIGHT: "right",
};

export const PURCHASE_OPTIONS = {
  NORMAL: 0,
  PREMIUM: 1,
};

export const PLANT_IMAGE_URL = {
  TOMATO: "https://ti-project.s3.amazonaws.com/tomato.png",
  CILANTRO: "https://ti-project.s3.amazonaws.com/cilantro.png",
  MINT: "https://ti-project.s3.amazonaws.com/mint.png",
  PEPPER: "https://ti-project.s3.amazonaws.com/pepper.png",
  SPINACH: "https://ti-project.s3.amazonaws.com/spinach.png",
};

export const MOCK_PUCHASE_OPTION = {
  POT: {
    name: "Pot",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum minima asperiores consectetur cum temporibus error eligendi neque possimus reprehenderit sunt quae consequuntur dolore, placeat officia dicta quidem, totam esse reiciendis.",
    NORMAL: {
      id: "0",
      variant: "Normal",
      features: [
        "All basic features",
        "All basic features",
        "All basic features",
      ],
      price: "15.00",
    },
    PREMIUM: {
      id: "1",
      variant: "Premium",
      features: [
        "All basic features",
        "All Premium features",
        "All Premium features",
      ],
      price: "25.00",
    },
  },
  SEED: {
    TOMATO: {
      id: "0",
      name: "Tomato",
      price: "3.00",
      imgUrl: "",
    },
    CILANTRO: {
      id: "1",
      name: "Cilantro",
      price: "3.00",
      imgUrl: "",
    },
    MINT: {
      id: "2",
      name: "Mint",
      price: "3.00",
      imgUrl: "",
    },
    PEPPER: {
      id: "3",
      name: "Pepper",
      price: "3.00",
      imgUrl: "",
    },
    SPINACH: {
      id: "4",
      name: "Spinach",
      price: "3.00",
      imgUrl: "",
    },
  },
  SOIL: {
    name: "Soil",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum minima asperiores consectetur cum temporibus error eligendi neque possimus reprehenderit sunt quae consequuntur dolore, placeat officia dicta quidem, totam esse reiciendis.",
    NORMAL: {
      id: "0",
      variant: "Normal",
      features: [
        "All basic features",
        "All basic features",
        "All basic features",
      ],
      price: "15.00",
    },
    PREMIUM: {
      id: "1",
      variant: "Premium",
      features: [
        "All basic features",
        "All Premium features",
        "All Premium features",
      ],
      price: "25.00",
    },
  },
  LIGHT: {
    name: "Light",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum minima asperiores consectetur cum temporibus error eligendi neque possimus reprehenderit sunt quae consequuntur dolore, placeat officia dicta quidem, totam esse reiciendis.",
    NORMAL: {
      id: "0",
      variant: "Normal",
      features: [
        "All basic features",
        "All basic features",
        "All basic features",
      ],
      price: "15.00",
    },
    PREMIUM: {
      id: "1",
      variant: "Premium",
      features: [
        "All basic features",
        "All Premium features",
        "All Premium features",
      ],
      price: "25.00",
    },
  },
};
