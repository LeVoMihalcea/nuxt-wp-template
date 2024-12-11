import {definePreset, palette} from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const CustomPreset = definePreset(Aura, {
    semantic: {
        primary: palette('#D42126'),
        blue: palette('var(--dark-blue)'),
        blueContrast: palette('var(--blue-contrast)')
    },
    components: {
        menubar: {
            gap: "40px",
            background: "{blue.500}",
            border: {
                radius: "0px",
                color: "transparent",
            },
            item: {
                color: 'black',
                padding: '10px',
                active: {
                    background: '{blue.500}'
                },
                focus: {
                    background: '{blue.300}'
                }
            },
            mobile: {
                button: {
                    color: "{white.color}",
                    hover: {
                        color: "{white.color}",
                        background: "{white.color}",
                    }
                }
            }
        }
    },
});

export default {
    preset: CustomPreset,
    options: {
        darkModeSelector: '.p-dark'
    }
};

