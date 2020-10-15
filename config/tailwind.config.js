module.exports = {
    theme: {
        customForms: theme => ({
            sm: {
                'input, textarea, multiselect, select': {
                    fontSize: theme('fontSize.sm'),
                    padding: `${theme('spacing.1')} ${theme('spacing.2')}`
                }
            }
        }),
        extend: {
            spacing: {
                '9': '2.25rem',
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            }
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            'spl': '1440px',
            'full': '1920px',
        },
        container: {
            padding: '0.75rem'
        },
        fontFamily: {
            'raleway': ['Raleway', 'Arial', 'sans-serif', 'system-ui', '-apple-system', 'Noto Sans', 'Helvetica Neue']
        },
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            lightGray: '#F4F4F4',
            primary: {
                50: '#F6FBFA',
                100: '#EEF6F5',
                200: '#D4E9E7',
                300: '#BBDBD8',
                400: '#87C1BB',
                500: '#54A69E',
                600: '#4C958E',
                700: '#32645F',
                800: '#264B47',
                900: '#19322F',
            },
            secondary: {
                50: '#F3F4F5',
                100: '#E7E9EC',
                200: '#C4C9CF',
                300: '#A1A8B1',
                400: '#5A6777',
                500: '#13263D',
                600: '#112237',
                700: '#0B1725',
                800: '#09111B',
                900: '#060B12',
            }
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms'),
    ],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ]
    }
}
