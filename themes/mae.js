import {definePreset, palette} from '@primevue/themes';
import Aura from '@primevue/themes/aura';

console.log(palette('#031021'))

const CustomPreset = definePreset(Aura, {
    semantic: {
        primary: palette('#031021'),
        accent: palette('#D42126'),
        blueContrast: palette('#13263F'),
        blueLight: palette('#3B84C2'),
    },
    components: {
        button: {
            labelFontWeight: 'bold',
            paddingX: '3.0rem',
            paddingY: '1rem',
            colorScheme: {
                light: {
                    root: {
                        primary: {
                            color: '{neutral.50}',
                            background: '{accent.500}',
                            borderColor: '{accent.500}',

                            hoverColor: '{neutral.50}',
                            hoverBackground: '{accent.500}',
                            hoverBorderColor: '{accent.500}',
                        },
                    },
                },
            },
        },
        menubar: {
            gap: "40px",
            border: {
                radius: "0px",
                color: "transparent",
            },
            item: {
                focus: {
                    background: '{transparent}',
                }
            },
        }
    },
});

export default {
    preset: CustomPreset,
    options: {
        darkModeSelector: '.p-dark'
    }
};
