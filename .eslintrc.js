module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint", "prettier", "import"],
  rules: {
    /*     "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error", */
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "no-use-before-define": 0,
    "no-shadow": 0,
    "no-unused-vars": 0,
    camelcase: 0,
    "lines-between-class-members": 0,
    "no-return-await": 0,
    "prettier/prettier": "error",
    
    "allowKeywords": false,
    "dot-notation": "off",
  
    // "import/no-default-export": "error",
  },
};
