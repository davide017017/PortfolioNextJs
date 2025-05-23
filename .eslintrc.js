/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true, // Indica che questo è il file ESLint principale per la directory e le sottodirectory
  parser: '@typescript-eslint/parser', // Specifica il parser da utilizzare per il codice TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Abilita il supporto per JSX (React)
    },
    ecmaVersion: 2020, // Specifica la versione di ECMAScript (ES2020)
    sourceType: 'module', // Indica che il codice utilizza moduli JavaScript (import/export)
  },
  plugins: [
    '@typescript-eslint', // Plugin per le regole specifiche di TypeScript
    'simple-import-sort', // Plugin per ordinare le importazioni
    'import', // Plugin per gestire le importazioni
    'react', // Plugin per le regole specifiche di React
    'react-memo', // Plugin per regole relative a React.memo
    'react-hooks', // Plugin per le regole specifiche di React Hooks
  ],
  extends: [
    'eslint:recommended', // Set di regole raccomandate da ESLint
    'plugin:@typescript-eslint/eslint-recommended', // Regole raccomandate per TypeScript
    'plugin:@typescript-eslint/recommended', // Altre regole raccomandate per TypeScript
    'plugin:@next/next/recommended', // Regole raccomandate per Next.js
    'plugin:prettier/recommended', // Integra Prettier con ESLint e applica le regole di formattazione definite in .prettierrc
  ],
  ignorePatterns: [
    '*/public', // Ignora la directory "public" (risorse statiche)
    '*/node_modules/*', // Ignora la directory "node_modules" (dipendenze)
    '*/.next/*', // Ignora la directory ".next" (output di Next.js)
    '*/dist/*', // Ignora la directory "dist" (output di build)
  ],
  rules: {
    'react/display-name': 'off', // Disabilita la regola che richiede un display name per i componenti React (spesso non necessario)
    'react-memo/require-usememo': 'off', // Disabilita la regola che suggerisce l'uso di useMemo (può essere troppo restrittiva)
    'react-hooks/exhaustive-deps': 'off', // Disabilita la regola che controlla le dipendenze degli hook (a volte causa falsi positivi)
    'react-memo/require-memo': 'error', // Imposta come errore l'assenza di memo quando necessario (React.memo)
    'react-hooks/rules-of-hooks': 'error', // Imposta come errore l'uso scorretto degli hook di React
    '@typescript-eslint/explicit-function-return-type': 'off', // Disabilita la regola che richiede tipi di ritorno espliciti per le funzioni (può essere utile in alcuni contesti)
    '@typescript-eslint/member-ordering': [
      // Configura l'ordine dei membri nelle interfacce e nei type literal
      'warn',
      {
        interfaces: ['signature', 'method', 'constructor', 'field'],
        typeLiterals: ['signature', 'method', 'constructor', 'field'],
      },
    ],
    'import/first': 'error', // Imposta come errore l'importazione di moduli non all'inizio del file
    'import/newline-after-import': 'error', // Imposta come errore l'assenza di una nuova riga dopo le importazioni
    'import/no-duplicates': 'error', // Imposta come errore l'importazione duplicata dello stesso modulo
    'import/order': 'off', // Disabilita l'ordinamento delle importazioni (utilizzato "simple-import-sort")
    'no-irregular-whitespace': 'off', // Disabilita la regola che rileva spazi bianchi irregolari (a volte utile in alcuni contesti)
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Imposta come avviso le variabili non utilizzate, ad eccezione di quelle che iniziano con "_"
    'object-curly-spacing': ['error', 'always'], // Imposta come errore la NON presenza di spazi vuoti all'interno delle parentesi graffe degli oggetti
    'react/jsx-curly-brace-presence': [2, 'never'], // Imposta come errore la presenza di spazi vuoti all'interno delle parentesi graffe nel JSX
    'react/jsx-no-duplicate-props': 'error', // Imposta come errore la presenza di proprietà duplicate nel JSX
    'react/jsx-sort-props': 'error', // Imposta come errore l'ordinamento non alfabetico delle props nel JSX
    'react/react-in-jsx-scope': 'off', // Disabilita la regola che richiede l'importazione di React nel JSX (non necessaria con le versioni recenti di React)
    'react/no-unescaped-entities': 'off', // Disabilita la regola che richiede l'escape di entità HTML non sicure (a volte causa problemi con caratteri speciali)
    'simple-import-sort/exports': 'error', // Imposta come errore l'ordinamento non corretto degli export
    'simple-import-sort/imports': 'error', // Imposta come errore l'ordinamento non corretto degli import
    'sort-imports': 'off', // Disabilita l'ordinamento delle importazioni (utilizzato "simple-import-sort")
    'jsx-a11y/no-onchange': 'off', // Disabilita la regola che richiede l'uso di handler onChange più specifici (a volte troppo restrittiva)
    'jsx-a11y/no-autofocus': 'off', // Disabilita la regola che vieta l'attributo autofocus (a volte utile)
    '@next/next/no-img-element': 'off', // Disabilita la regola che consiglia di usare il componente <Image> di Next.js (a volte si preferisce <img>)
  },
  settings: {
    react: {
      pragma: 'React', // Specifica il nome della variabile globale per React
      version: 'detect', // Rileva automaticamente la versione di React
    },
  },
  overrides: [
    // Regole specifiche per determinati file
    {
      files: ['**/*.tsx'], // Regole per i file TypeScript React (.tsx)
      rules: {
        'react/prop-types': 'off', // Disabilita la regola prop-types per i file TypeScript (TypeScript gestisce i tipi)
      },
    },
    {
      files: ['**/*.js'], // Regole per i file JavaScript (.js)
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // Disabilita la regola no-var-requires per i file JavaScript (per compatibilità con codice legacy)
      },
    },
  ],
};
