import {definePreset, palette} from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const CustomPreset = definePreset(Aura, {
    semantic: {
        primary: palette('#031021'),
        accent: palette('#D42126'),
        blueContrast: palette('#13263F'),
        blueLight: palette('#3B84C2'),
    },
    components: {
        button: {
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
                        text:{
                            primary: {
                                hover: {
                                    background: '{accent.500}',
                                }
                            }
                        }
                    },
                },
            },
        },
        menubar: {
            gap: "0px",
            border: {
                radius: "0px",
                color: "{transparent}",
            },
            item: {
                focus: {
                    background: '{transparent}',
                },
                active: {
                    background: '{transparent}',
                },
            },
            submenu: {
                background: '{primary.500}',
                border: {
                    color: '{primary.500}',
                }
            }
        },
        dialog:{
            background: '{blueContrast.500}',
            border:{
                color: '{transparent}',
            },
            content:{
                padding: '0px',
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
