import { definePreset, palette } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const CustomPreset = definePreset(Aura, {
    semantic: {
        primary: palette('#D42126'),
        blue: palette('var(--dark-blue)'),
        blueContrast: palette('var(--blue-contrast)')
    },
    components: {
        button: {
            link: {
                active: {
                    color: '{primary.500}'
                }
            }
        },
        menubar: {
            gap: "40px",
            border: {
                radius: "0px",
                color: "transparent",
            },
            item: {
                focus: {
                    background: '{transparent}', // Optional: adjust focus background
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
