export default {
    global: {
        properties: {
            font: {
                family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                size: '14px',
                weight: 'normal'
            },
            color: '#495057',
            borderRadius: '6px',
            gap: '0.5rem',
            transition: {
                duration: '0.2s',
                property: 'background-color, color, border-color, box-shadow'
            }
        },
        variables: {
            blue: {
                500: '#0d6efd'
            },
            green: {
                500: '#198754'
            },
            yellow: {
                500: '#ffc107'
            }
        }
    },
    panel: {
        header: {
            properties: {
                color: '#343a40',
                background: '#f8f9fa',
                padding: {
                    top: '1.25rem',
                    right: '1.25rem',
                    bottom: '1.25rem',
                    left: '1.25rem'
                },
                border: {
                    width: '1px',
                    style: 'solid',
                    color: '#dee2e6'
                }
            }
        },
        title: {
            properties: {
                font: {
                    size: 'inherit',
                    weight: 700
                }
            }
        },
        toggler: {
            properties: {
                width: '2rem',
                height: '2rem',
                color: '#6c757d',
                background: 'transparent',
                border: {
                    width: 0,
                    style: 'none',
                    color: 'initial',
                    radius: '50%'
                }
            },
            states: {
                hover: {
                    properties: {
                        color: '#343a40',
                        background: '#e9ecef',
                        border: {
                            width: 'inherit',
                            style: 'inherit',
                            color: '#dee2e6'
                        }
                    }
                },
                focus: {
                    properties: {
                        outline: {
                            color: 'var(--p-primary-light-color)',
                            style: 'none',
                            width: 0,
                            offset: 0
                        },
                        boxShadow: '0 0 0 0.2rem var(--p-primary-light-color)'
                    }
                }
            }
        },
        content: {
            properties: {
                color: '#495057',
                background: '#ffffff',
                padding: {
                    top: '1.25rem',
                    right: '1.25rem',
                    bottom: '1.25rem',
                    left: '1.25rem'
                },
                border: {
                    width: '1px',
                    style: 'solid',
                    color: '#dee2e6'
                }
            }
        },
        footer: {
            properties: {
                color: '#495057',
                background: '#ffffff',
                padding: {
                    top: '0.75rem',
                    right: '1.25rem',
                    bottom: '0.75rem',
                    left: '1.25rem'
                },
                border: {
                    width: '1px',
                    style: 'solid',
                    color: '#dee2e6'
                }
            }
        },
        variants: {
            toggleable: {
                header: {
                    properties: {
                        padding: {
                            top: '0.75rem',
                            right: '1.25rem',
                            bottom: '0.75rem',
                            left: '1.25rem'
                        }
                    }
                }
            }
        }
    },
    card: {
        root: {
            properties: {
                color: '#495057',
                background: '#ffffff',
                boxShadow: '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
            }
        },
        body: {
            properties: {
                padding: {
                    top: '1.25rem',
                    right: '1.25rem',
                    bottom: '1.25rem',
                    left: '1.25rem'
                }
            }
        },
        title: {
            properties: {
                font: {
                    size: '1.5rem',
                    weight: 700
                }
            }
        },
        subtitle: {
            properties: {
                font: {
                    size: 'inherit',
                    weight: 700
                },
                color: '#6c757d'
            }
        },
        content: {
            properties: {
                padding: {
                    top: '1.25rem',
                    right: 0,
                    bottom: '1.25rem',
                    left: 0
                }
            }
        },
        footer: {
            properties: {
                padding: {
                    top: '1.25rem',
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
        }
    }
};
