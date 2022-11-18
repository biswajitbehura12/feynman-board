import { createTheme } from "@mui/material";

export default createTheme({
    palette: {
        primary: {
            main: "#ed5413",
        },
        secondary: {
            main: "#05f549"
        },
        text: {
            light: "#1d05f5",
            primary: "#f50539"
        }
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: "small",
                variant: "outlined",
                margin: "dense",
                fullWidth: true,
                InputLabelProps: {
                    shrink: true,
                    color: 'primary'
                }
            }
        },
        MuiButton: {
            defaultProps: {
                size: "small",
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: '#fff'
                }
            }
        },
        MuiCard: {
            variants:[
                {
                    props: {variant: 'shaded'},
                    style: {
                        backgroundColor: "#E0E0D9", 
                        borderRadius: '10px',
                    }
                }
            ]
        },
        MuiTypography:{
            defaultProps: {
                align: 'left'
            }
        },
        MuiPaper: {
            styleOverrides: {
                root:{
                    padding: 8
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: '#E0E0D9'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    color: '#e01919'
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#1fbfc1',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                }
            }
        }
    }
})