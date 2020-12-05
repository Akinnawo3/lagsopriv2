/**
 * App Dark Theme
 */
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import AppConfig from 'Constants/AppConfig';

const { darkBgColor } = AppConfig.darkThemeColors;

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        types: {
            dark: {
                background: {
                    paper: darkBgColor,
                    default: darkBgColor,
                    appBar: darkBgColor,
                    contentFrame: darkBgColor,
                    chip: darkBgColor,
                    avatar: darkBgColor,
                    tabs: darkBgColor
                }
            }
        },
        primary: {
            main: AppConfig.themeColors.primary,
            contrastText: '#fff'
        },
        secondary: {
            main: grey[700],
            contrastText: '#fff'
        },
        background: {
            paper: darkBgColor,
            default: darkBgColor,
            appBar: darkBgColor,
            contentFrame: darkBgColor,
            chip: darkBgColor,
            avatar: darkBgColor,
            tabs: darkBgColor
        }
    },
    status: {
        danger: 'orange',
    },
    typography: {
        button: {
            fontWeight: 400,
            textAlign: 'capitalize'
        }
    }
});

export default theme;
