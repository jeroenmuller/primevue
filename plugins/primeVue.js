import Accordion from '@/components/lib/accordion/Accordion';
import AccordionTab from '@/components/lib/accordiontab/AccordionTab';
import AutoComplete from '@/components/lib/autocomplete/AutoComplete';
import Avatar from '@/components/lib/avatar/Avatar';
import AvatarGroup from '@/components/lib/avatargroup/AvatarGroup';
import Badge from '@/components/lib/badge/Badge';
import BadgeDirective from '@/components/lib/badgedirective/BadgeDirective';
import BlockUI from '@/components/lib/blockui/BlockUI';
import Breadcrumb from '@/components/lib/breadcrumb/Breadcrumb';
import Button from '@/components/lib/button/Button';
import Calendar from '@/components/lib/calendar/Calendar';
import Card from '@/components/lib/card/Card';
import Carousel from '@/components/lib/carousel/Carousel';
import CascadeSelect from '@/components/lib/cascadeselect/CascadeSelect';
import Chart from '@/components/lib/chart/Chart';
import Checkbox from '@/components/lib/checkbox/Checkbox';
import Chip from '@/components/lib/chip/Chip';
import Chips from '@/components/lib/chips/Chips';
import ColorPicker from '@/components/lib/colorpicker/ColorPicker';
import Column from '@/components/lib/column/Column';
import ColumnGroup from '@/components/lib/columngroup/ColumnGroup';
import PrimeVue from '@/components/lib/config/PrimeVue';
import ConfirmationService from '@/components/lib/confirmationservice/ConfirmationService';
import ConfirmDialog from '@/components/lib/confirmdialog/ConfirmDialog';
import ConfirmPopup from '@/components/lib/confirmpopup/ConfirmPopup';
import ContextMenu from '@/components/lib/contextmenu/ContextMenu';
import DataTable from '@/components/lib/datatable/DataTable';
import DataView from '@/components/lib/dataview/DataView';
import DataViewLayoutOptions from '@/components/lib/dataviewlayoutoptions/DataViewLayoutOptions';
import DeferredContent from '@/components/lib/deferredcontent/DeferredContent';
import Dialog from '@/components/lib/dialog/Dialog';
import DialogService from '@/components/lib/dialogservice/DialogService';
import Divider from '@/components/lib/divider/Divider';
import Dock from '@/components/lib/dock/Dock';
import Dropdown from '@/components/lib/dropdown/Dropdown';
import DynamicDialog from '@/components/lib/dynamicdialog/DynamicDialog';
import Editor from '@/components/lib/editor/Editor';
import Fieldset from '@/components/lib/fieldset/Fieldset';
import FileUpload from '@/components/lib/fileupload/FileUpload';
import FocusTrap from '@/components/lib/focustrap/FocusTrap';
import Galleria from '@/components/lib/galleria/Galleria';
import Image from '@/components/lib/image/Image';
import InlineMessage from '@/components/lib/inlinemessage/InlineMessage';
import Inplace from '@/components/lib/inplace/Inplace';
import InputMask from '@/components/lib/inputmask/InputMask';
import InputNumber from '@/components/lib/inputnumber/InputNumber';
import InputSwitch from '@/components/lib/inputswitch/InputSwitch';
import InputText from '@/components/lib/inputtext/InputText';
import Knob from '@/components/lib/knob/Knob';
import Listbox from '@/components/lib/listbox/Listbox';
import MegaMenu from '@/components/lib/megamenu/MegaMenu';
import Menu from '@/components/lib/menu/Menu';
import Menubar from '@/components/lib/menubar/Menubar';
import Message from '@/components/lib/message/Message';
import MultiSelect from '@/components/lib/multiselect/MultiSelect';
import OrderList from '@/components/lib/orderlist/OrderList';
import OrganizationChart from '@/components/lib/organizationchart/OrganizationChart';
import OverlayPanel from '@/components/lib/overlaypanel/OverlayPanel';
import Paginator from '@/components/lib/paginator/Paginator';
import Panel from '@/components/lib/panel/Panel';
import PanelMenu from '@/components/lib/panelmenu/PanelMenu';
import Password from '@/components/lib/password/Password';
import PickList from '@/components/lib/picklist/PickList';
import ProgressBar from '@/components/lib/progressbar/ProgressBar';
import ProgressSpinner from '@/components/lib/progressspinner/ProgressSpinner';
import RadioButton from '@/components/lib/radiobutton/RadioButton';
import Rating from '@/components/lib/rating/Rating';
import Ripple from '@/components/lib/ripple/Ripple';
import Row from '@/components/lib/row/Row';
import ScrollPanel from '@/components/lib/scrollpanel/ScrollPanel';
import ScrollTop from '@/components/lib/scrolltop/ScrollTop';
import SelectButton from '@/components/lib/selectbutton/SelectButton';
import Sidebar from '@/components/lib/sidebar/Sidebar';
import Skeleton from '@/components/lib/skeleton/Skeleton';
import Slider from '@/components/lib/slider/Slider';
import SpeedDial from '@/components/lib/speeddial/SpeedDial';
import SplitButton from '@/components/lib/splitbutton/SplitButton';
import Splitter from '@/components/lib/splitter/Splitter';
import SplitterPanel from '@/components/lib/splitterpanel/SplitterPanel';
import Steps from '@/components/lib/steps/Steps';
import StyleClass from '@/components/lib/styleclass/StyleClass';
import TabMenu from '@/components/lib/tabmenu/TabMenu';
import TabPanel from '@/components/lib/tabpanel/TabPanel';
import TabView from '@/components/lib/tabview/TabView';
import Tag from '@/components/lib/tag/Tag';
import Terminal from '@/components/lib/terminal/Terminal';
import Textarea from '@/components/lib/textarea/Textarea';
import TieredMenu from '@/components/lib/tieredmenu/TieredMenu';
import Timeline from '@/components/lib/timeline/Timeline';
import Toast from '@/components/lib/toast/Toast';
import ToastService from '@/components/lib/toastservice/ToastService';
import ToggleButton from '@/components/lib/togglebutton/ToggleButton';
import Toolbar from '@/components/lib/toolbar/Toolbar';
import Tooltip from '@/components/lib/tooltip/Tooltip';
import Tree from '@/components/lib/tree/Tree';
import TreeSelect from '@/components/lib/treeselect/TreeSelect';
import TreeTable from '@/components/lib/treetable/TreeTable';
import TriStateCheckbox from '@/components/lib/tristatecheckbox/TriStateCheckbox';
import VirtualScroller from '@/components/lib/virtualscroller/VirtualScroller';

import DocApiSection from '@/components/doc/DocApiSection';
import DocComponent from '@/components/doc/DocComponent';
import DocSectionCode from '@/components/doc/DocSectionCode';
import DocSectionNav from '@/components/doc/DocSectionNav';
import DocSections from '@/components/doc/DocSections';
import DocSectionText from '@/components/doc/DocSectionText';
import CodeHighlight from '@/components/layout/CodeHighlight';
import DevelopmentSection from '@/components/layout/DevelopmentSection';

const tailwindLight = {
    directives: {
        ripple: {
            root: {
                class: ['block absolute bg-white bg-opacity-50 rounded-full transform scale-0 pointer-events-none']
            }
        }
    },
    //PANELS
    panel: {
        header: ({ props }) => ({
            class: [
                'flex items-center justify-between', // flex and alignments
                'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
                { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
            ]
        }),
        title: {
            class: ['leading-none font-bold']
        },
        toggler: {
            class: [
                'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
                'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
                'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
            ]
        },
        togglerIcon: {
            class: ['inline-block']
        },
        content: {
            class: [
                'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
            ] // padding, borders, and colors
        }
    },
    accordion: {
        root: {
            class: ['mb-1']
        },
        tab: {
            header: ({ props }) => ({
                class: [
                    { 'select-none pointer-events-none cursor-default opacity-60': props?.disabled } // Condition
                ]
            }),
            headerAction: ({ tab }) => ({
                class: [
                    'flex items-center cursor-pointer relative no-underline select-none', // Alignments
                    'p-5 transition duration-200 ease-in-out rounded-t-md font-bold transition-shadow duration-200', // Padding and transition
                    'border border-gray-300 bg-gray-100 text-gray-600', // Borders and colors
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Dark mode
                    'hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800', // Hover
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                    { 'rounded-br-md rounded-bl-md': !tab.context.active, 'rounded-br-0 rounded-bl-0 text-gray-800': tab.context.active } // Condition
                ]
            }),
            headerIcon: {
                class: ['inline-block mr-2']
            },
            headerTitle: {
                class: ['leading-none']
            },
            content: {
                class: [
                    'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
                ]
            }
        }
    },
    card: {
        root: {
            class: [
                'bg-white text-gray-700 shadow-md rounded-md', // Background, text color, box shadow, and border radius.
                'dark:bg-gray-900 dark:text-white ' //dark
            ]
        },
        body: {
            class: 'p-5' // Padding.
        },
        title: {
            class: 'text-2xl font-bold mb-2' // Font size, font weight, and margin bottom.
        },
        subtitle: {
            class: [
                'font-normal mb-2 text-gray-600', // Font weight, margin bottom, and text color.
                'dark:text-white/60 ' //dark
            ]
        },
        content: {
            class: 'py-5' // Vertical padding.
        },
        footer: {
            class: 'pt-5' // Top padding.
        }
    },
    divider: {
        root: ({ props }) => ({
            class: [
                'flex relative', // alignments.
                {
                    'w-full my-5 mx-0 py-0 px-5 before:block before:left-0 before:absolute before:top-1/2 before:w-full before:border-t before:border-gray-300 before:dark:border-blue-900/40': props.layout == 'horizontal', // Padding and borders for horizontal layout.
                    'justify-center min-h-full mx-4 md:mx-5 py-5 before:block before:min-h-full before:absolute before:left-1/2 before:top-0 before:transform before:-translate-x-1/2 before:border-l before:border-gray-300 before:dark:border-blue-900/40':
                        props.layout == 'vertical' // Padding and borders for vertical layout.
                },
                { 'before:border-solid': props.type == 'solid', 'before:border-dotted': props.type == 'dotted', 'before:border-dashed': props.type == 'dashed' }, // Border type condition.
                {
                    'justify-center items-center': props.align == 'center' || props.align == null, // Alignment condition for center or default alignment.
                    'justify-end items-center': props.align == 'right', // Alignment condition for right alignment.
                    'justify-start items-center': props.align == 'left', // Alignment condition for left alignment.
                    'items-start': props.align == 'top', // Alignment condition for top alignment.
                    'items-end': props.align == 'bottom' // Alignment condition for bottom alignment.
                }
            ]
        }),
        content: {
            class: 'px-1 bg-white z-10 dark:bg-gray-900' // Padding and background color.
        }
    },
    fieldset: {
        root: {
            class: [
                'border border-gray-300 bg-white text-gray-700 rounded-md block mx-2 my-0.5 pl-4 pr-5 inline-size-min', // Borders, background, text color, spacing, and inline size.
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //dark
            ]
        },
        legend: ({ props }) => ({
            class: [
                'border border-gray-300 text-gray-700 bg-gray-50 font-bold rounded-md',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ', //dark
                {
                    'p-0 transition-none hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': props.toggleable,
                    'p-5': !props.toggleable
                }
            ]
        }),
        toggler: ({ props }) => ({
            class: [
                'flex items-center justify-center',
                {
                    'p-5 text-gray-700 rounded-md transition-none cursor-pointer overflow-hidden relative select-none hover:text-gray-900 focus:focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:text-white/80 dark:hover:text-white/80 dark:hover:bg-gray-800/60 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                        props.toggleable
                }
            ]
        }),
        togglerIcon: {
            class: 'mr-2 inline-block' // Margin and display style.
        },
        legendTitle: {
            class: 'flex items-center justify-center leading-none' // alignments, and leading style.
        },
        content: {
            class: 'p-5' // Padding.
        }
    },
    scrollpanel: {
        wrapper: {
            class: 'float-left h-full overflow-hidden relative w-full z-10'
        },
        content: {
            class: 'box-border h-[calc(100% + 18px)] overflow-scroll pr-18 pb-18 relative scrollbar-none w-[calc(100% + 18px)] [&::-webkit-scrollbar]:hidden'
        },
        barX: {
            class: 'bg-gray-50 border-0 transition-none invisible absolute bottom-0 h-3 z-2 rounded cursor-pointer opacity-0 relative'
        },
        barY: {
            class: 'bg-gray-50 border-0 transition-none top-0 w-3 h-full z-2 rounded cursor-pointer opacity-0 relative'
        }
    },
    tabview: {
        navContainer: ({ props, context, parent }) => ({
            class: [
                'relative', // Relative positioning.
                { 'overflow-hidden': props.scrollable } // Overflow condition.
            ]
        }),
        navContent: {
            class: ['overflow-y-hidden overscroll-contain overscroll-auto scroll-smooth [&::-webkit-scrollbar]:hidden'] // Overflow and scrollbar styles.
        },
        previousButton: {
            class: ['h-full flex items-center justify-center absolute top-0 z-20', 'left-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ]'] // Flex and absolute positioning styles.
        },
        nextButton: {
            class: ['h-full flex items-center justify-center absolute top-0 z-20', 'right-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 '] // Flex and absolute positioning styles.
        },
        nav: {
            class: ['flex flex-1 list-none m-0 p-0', 'bg-white border border-gray-300 border-0 border-b-2', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 '] // Flex, list, margin, padding, and border styles.
        },
        tab: {
            header: ({ tab }) => ({
                class: ['mr-0', { 'cursor-default pointer-events-none select-none user-select-none opacity-60': tab.props?.disabled }] // Margin and condition-based styles.
            }),
            headerAction: ({ tab }) => ({
                class: [
                    'items-center cursor-pointer flex overflow-hidden relative select-none text-decoration-none user-select-none', // Flex and overflow styles.
                    'border-b-2 p-5 font-bold rounded-t-lg transition-shadow duration-200 m-0', // Border, padding, font, and transition styles.
                    'transition-colors duration-200', // Transition duration style.
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Focus styles.
                    {
                        'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80':
                            tab.parent.state.d_activeIndex !== tab.context.index, // Condition-based hover styles.
                        'bg-white border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': tab.parent.state.d_activeIndex === tab.context.index // Condition-based active styles.
                    }
                ],
                style: 'margin-bottom:-2px' // Negative margin style.
            }),
            headerTitle: {
                class: ['leading-none whitespace-nowrap'] // Leading and whitespace styles.
            },
            content: {
                class: ['bg-white p-5 border-0 text-gray-700 rounded-bl-2xl rounded-br-2xl', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80'] // Background, padding, border, and text styles.
            }
        }
    },

    //OVERLAYS

    dialog: {
        root: ({ props, state }) => ({
            class: ['rounded-lg shadow-lg border-0', 'flex flex-col max-h-90 transform scale-100', 'm-0  w-[50vw] z-40 relative', '', 'dark:border dark:border-blue-900/40']
        }),
        header: {
            class: ['flex items-center justify-between flex-shrink-0', 'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6', 'dark:bg-gray-900  dark:text-white/80']
        },
        headerTitle: {
            class: ['font-bold text-lg']
        },
        headerIcons: {
            class: ['flex items-center']
        },
        closeButton: {
            class: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: {
            class: ['w-4 h-4 inline-block']
        },
        content: {
            class: ['overflow-y-auto', 'bg-white text-gray-700 px-6 pb-8 pt-0', 'rounded-bl-lg rounded-br-lg', 'dark:bg-gray-900  dark:text-white/80 ']
        },
        footer: {
            class: ['flex-shrink-0 ', 'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg', 'dark:bg-gray-900  dark:text-white/80']
        },
        mask: {
            class: ['fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-auto', 'bg-black bg-opacity-40 transition duration-200 z-20']
        }
    },
    confirmpopup: {
        root: ({ props, state }) => ({
            class: [
                'bg-white text-gray-700 border-0 rounded-md shadow-lg',
                'z-40 transform origin-center',
                'mt-10 absolute left-0 top-0 ',
                // 'before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-l-[5px] before:border-r-[5px] before:border-transparent before:border-b-[10px] before:border-t-[0] before:border-l-[5px] before:border-r-[5px] before:border-b-[0] before:border-red-500',
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            ]
        }),
        content: {
            class: ['p-5 items-center flex']
        },
        icon: {
            class: ['text-2xl']
        },
        message: {
            class: ['ml-4']
        },
        footer: {
            class: ['text-right px-5 py-5 pt-0 ']
        }
        // rejectButton: {
        //     class: ['bg-transparent text-blue-500 border-transparent', 'text-sm px-2 py-1.5 ml-0 mr-2 w-auto', 'flex items-center cursor-pointer inline-flex overflow-hidden relative text-center select-none user-select-none align-bottom']
        // },
        // acceptButton: {
        //     class: ['text-white bg-blue-500 border-2 border-blue-500', 'text-sm px-2 py-1.5 ml-0 mr-2 w-auto', 'flex items-center cursor-pointer inline-flex overflow-hidden relative text-center select-none user-select-none align-bottom']
        // }
    },
    overlaypanel: {
        root: ({ props, state }) => ({
            class: [
                'bg-white text-gray-700 border-0 rounded-md shadow-lg',
                'z-40 transform origin-center',
                'mt-10 absolute left-0 top-0 ',
                // 'before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-l-[5px] before:border-r-[5px] before:border-transparent before:border-b-[10px] before:border-t-[0] before:border-l-[5px] before:border-r-[5px] before:border-b-[0] before:border-red-500',
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            ]
        }),
        content: {
            class: ['p-5 items-center flex']
        }
    },
    sidebar: {
        root: ({ props, state }) => ({
            class: [
                'flex flex-col pointer-events-auto relative transform translate-z-0 transition-transform duration-300',
                'bg-white text-gray-700 border-0 shadow-lg',
                { 'h-full w-80': props.position == 'left' || props.position == 'right', 'h-40 w-full': props.position == 'top' || props.position == 'bottom' },
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            ]
        }),
        header: {
            class: ['flex items-center justify-end', 'p-5']
        },
        closeButton: {
            class: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: {
            class: ['w-4 h-4 inline-block']
        },
        content: {
            class: ['p-5 pt-0 h-full w-full', 'flex-grow overflow-y-auto']
        },
        mask: ({ props, state }) => ({
            class: [
                'fixed top-0 left-0 w-full h-full flex  pointer-events-auto',
                'bg-black bg-opacity-40 transition duration-200 z-20',
                { 'justify-end': props.position == 'right', 'items-start': props.position == 'top', 'items-end': props.position == 'bottom' }
            ]
        })
    },

    //UPLOAD

    fileupload: {
        input: {
            class: ['hidden']
        },
        buttonbar: {
            class: ['flex flex-wrap', 'bg-gray-50 p-5 border border-solid border-gray-300 text-gray-700 rounded-tr-lg rounded-tl-lg gap-2 border-b-0']
        },
        chooseButton: {
            class: ['text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base', 'overflow-hidden relative']
        },
        chooseIcon: {
            class: ['mr-2 inline-block']
        },
        chooseButtonLabel: {
            class: ['flex-1 font-bold']
        },
        content: ({ props }) => ({
            class: ['relative', 'bg-white p-8 border border-gray-300 text-gray-700 rounded-b-lg']
        }),
        file: {
            class: ['flex items-center flex-wrap', 'p-4 border border-gray-300 rounded gap-2 mb-2', 'last:mb-0']
        },
        thumbnail: {
            class: ['flex-shrink-0']
        },
        fileName: {
            class: ['mb-2']
        },
        fileSize: {
            class: ['mr-2']
        }
    },

    //BUTTONS

    button: {
        root: ({ props, context }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom',
                'transition duration-200 ease-in-out',
                {
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': !props.link && props.severity == null && !props.text && !props.outlined && !props.plain,
                    'text-blue-600 bg-transparent border-transparent': props.link
                },
                {
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.severity == 'secondary' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-green-500 border border-green-500 hover:bg-green-600 hover:border-green-600': props.severity == 'success' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': props.severity == 'info' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-orange-500 border border-orange-500 hover:bg-orange-600 hover:border-orange-600': props.severity == 'warning' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:border-purple-600': props.severity == 'help' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-red-500 border border-red-500 hover:bg-red-600 hover:border-red-600': props.severity == 'danger' && !props.text && !props.outlined && !props.plain
                },
                { 'shadow-lg': props.raised },
                { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
                {
                    'bg-transparent border-transparent': props.text && !props.plain,
                    'text-blue-500 hover:bg-blue-300/20': props.text && props.severity == null && !props.plain,
                    'text-gray-500 hover:bg-gray-300/20': props.text && props.severity == 'secondary' && !props.plain,
                    'text-green-500 hover:bg-green-300/20': props.text && props.severity == 'success' && !props.plain,
                    'text-blue-500 hover:bg-blue-300/20': props.text && props.severity == 'info' && !props.plain,
                    'text-orange-500 hover:bg-orange-300/20': props.text && props.severity == 'warning' && !props.plain,
                    'text-purple-500 hover:bg-purple-300/20': props.text && props.severity == 'help' && !props.plain,
                    'text-red-500 hover:bg-red-300/20': props.text && props.severity == 'danger' && !props.plain
                },
                { 'shadow-lg': props.raised && props.text },
                {
                    'text-gray-500 hover:bg-gray-300/20': props.plain & props.text,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain & props.outlined,
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain & !props.outlined & !props.text
                },
                {
                    'bg-transparent border': props.outlined && !props.plain,
                    'text-blue-500 border border-blue-500 hover:bg-blue-300/20': props.outlined && props.severity == null && !props.plain,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.outlined && props.severity == 'secondary' && !props.plain,
                    'text-green-500 border border-green-500 hover:bg-green-300/20': props.outlined && props.severity == 'success' && !props.plain,
                    'text-blue-500 border border-blue-500 hover:bg-blue-300/20': props.outlined && props.severity == 'info' && !props.plain,
                    'text-orange-500 border border-orange-500 hover:bg-orange-300/20': props.outlined && props.severity == 'warning' && !props.plain,
                    'text-purple-500 border border-purple-500 hover:bg-purple-300/20': props.outlined && props.severity == 'help' && !props.plain,
                    'text-red-500 border border-red-500 hover:bg-red-300/20': props.outlined && props.severity == 'danger' && !props.plain
                },
                { 'px-4 py-3 text-base': props.size == null, 'text-xs py-2 px-3': props.size == 'small', 'text-xl py-3 px-4': props.size == 'large' }
            ]
        }),
        label: ({ props }) => ({
            class: ['flex-1', 'duration-200', 'font-bold', { 'hover:underline': props.link }]
        }),
        icon: ({ props }) => ({
            class: [
                'mx-0',
                { 'mr-2': props.iconPos == 'left' && props.label != null, 'ml-2': props.iconPos == 'right' && props.label != null, 'mb-2': props.iconPos == 'top' && props.label != null, 'mt-2': props.iconPos == 'bottom' && props.label != null }
            ]
        }),
        badge: ({ props }) => ({
            class: [{ 'ml-2 w-4 h-4 leading-none': props.badge }]
        })
    },
    speeddial: {
        root: {
            class: []
        }
    },
    //FORMS

    inputtext: {
        root: ({ props, context }) => ({
            class: [
                'm-0',
                'font-sans  text-gray-600 bg-white border border-gray-300 transition-colors duration-200 appearance-none rounded-lg',
                { 'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled, 'opacity-60 select-none pointer-events-none cursor-default': context.disabled },
                { 'text-lg px-4 py-4': props.size == 'large', 'text-xs px-2 py-2': props.size == 'small', 'p-3 text-base': props.size == null }
            ]
        })
    },
    knob: {
        root: ({ props }) => ({
            class: ['focus:outline-none focus:outline-offset-0 focus:shadow-0', { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
        }),
        range: {
            class: ['stroke-current transition duration-100 ease-in stroke-gray-200 fill-none']
        },
        value: {
            class: ['animate-dash-frame  stroke-blue-500 fill-none']
        },
        label: {
            class: ['text-center text-xl']
        }
    },
    inputswitch: {
        root: ({ props }) => ({
            class: ['inline-block relative', 'w-12 h-7', { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
        }),
        slider: ({ props }) => ({
            class: [
                'absolute cursor-pointer top-0 left-0 right-0 bottom-0 border border-transparent',
                'transition-colors duration-200 rounded-2xl',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                "before:absolute before:content-'' before:top-1/2 before:bg-white before:w-5 before:h-5 before:left-1 before:-mt-2.5 before:rounded-full before:transition-duration-200",
                { 'bg-gray-200 hover:bg-gray-300': !props.modelValue, 'bg-blue-500 before:transform before:translate-x-5': props.modelValue }
            ]
        })
    },
    rating: {
        root: ({ props }) => ({
            class: ['relative flex items-center', 'gap-2', { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
        }),
        cancelitem: {
            class: ['inline-flex items-center cursor-pointer']
        },
        cancelicon: {
            class: ['text-red-500', 'w-5 h-5', 'transition duration-200 ease-in']
        },
        item: ({ props }) => ({
            class: ['inline-flex items-center', { 'cursor-pointer': !props.readonly, 'cursor-default': props.readonly }]
        }),
        officon: {
            class: ['text-gray-700 hover:text-blue-400', 'w-5 h-5', 'transition duration-200 ease-in']
        },
        onicon: {
            class: ['text-blue-500', 'w-5 h-5', 'transition duration-200 ease-in']
        }
    },
    selectbutton: {
        root: ({ props }) => ({
            class: [{ 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
        }),
        button: ({ context, props }) => ({
            class: [
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'px-4 py-3',
                'transition duration-200 border border-r-0',
                'first:rounded-l-md first:rounded-tr-none first:rounded-br-none last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                { 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50': !context.active, 'bg-blue-500 border-blue-500 text-white hover:bg-blue-600': context.active },
                console.log(props.optionDisabled)
            ]
        }),
        label: {
            class: ['font-bold']
        }
    },
    slider: {
        root: ({ props }) => ({
            class: [
                console.log(props),
                'relative',
                'bg-gray-100 border-0 rounded-6',
                { 'h-1 w-56': props.orientation == 'horizontal', 'w-1 h-56': props.orientation == 'vertical' },
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        range: ({ props }) => ({
            class: ['bg-blue-500', 'block absolute', { 'top-0 left-0 h-full': props.orientation == 'horizontal', 'bottom-0 left-0 w-full': props.orientation == 'vertical' }]
        }),
        handle: ({ props }) => ({
            class: [
                'h-4 w-4 bg-white border-2 border-blue-500 rounded-full transition duration-200',
                'cursor-grab touch-action-none block',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                'hover:bg-blue-500 hover:border hover:border-blue-500',
                { 'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal', 'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical' }
            ]
        }),
        starthandler: ({ props }) => ({
            class: [
                'h-4 w-4 bg-white border-2 border-blue-500 rounded-full transition duration-200',
                'cursor-grab touch-action-none block',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                'hover:bg-blue-500 hover:border hover:border-blue-500',
                { 'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal', 'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical' }
            ]
        }),
        endhandler: ({ props }) => ({
            class: [
                'h-4 w-4 bg-white border-2 border-blue-500 rounded-full transition duration-200',
                'cursor-grab touch-action-none block',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                'hover:bg-blue-500 hover:border hover:border-blue-500',
                { 'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal', 'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical' }
            ]
        })
    },
    password: {
        root: ({ props }) => ({
            class: ['inline-flex relative', { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
        }),
        panel: {
            class: ['p-5 bg-white text-gray-700 shadow-md rounded-md']
        },
        meter: {
            class: ['mb-2 bg-gray-300 h-3']
        },
        meterlabel: ({ instance, props }) => ({
            class: [
                'transition-width duration-1000 ease-in-out h-full',
                console.log(),
                { 'bg-red-500': instance.meter.strength == 'weak', 'bg-orange-500': instance.meter.strength == 'medium', 'bg-green-500': instance.meter.strength == 'strong' },
                { 'pr-[2.5rem] ': props.toggleMask }
            ]
        }),
        showicon: {
            class: ['absolute top-1/2 -mt-2', 'right-3 text-gray-600']
        },
        hideicon: {
            class: ['absolute top-1/2 -mt-2', 'right-3 text-gray-600']
        }
    },

    // <div id="pv_id_183_panel" class="p-password-panel p-component" data-pc-section="panel" style="z-index: 1001; position: absolute; top: 940.859px; left: 823px; min-width: 177px; transform-origin: center top;">
    //     <div class="p-password-meter" data-pc-section="meter">
    //         <div class="p-password-strength weak" data-pc-section="meterlabel" style="width: 33.33%;"></div>
    //     </div>
    //     <div class="p-password-info" data-pc-section="info">Weak</div>
    // </div>

    togglebutton: {
        root: ({ props }) => ({
            class: [
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'px-4 py-3 rounded-md text-base w-36',
                'border transition duration-200 ease-in-out',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                { 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-700': !props.modelValue, 'bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600': props.modelValue },
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        label: {
            class: ['font-bold text-center w-full']
        },
        icon: ({ props }) => ({
            class: [' mr-2', { 'text-gray-600': !props.modelValue, 'text-white': props.modelValue }]
        })
    },
    tristatecheckbox: {
        root: {
            class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
        },
        checkbox: ({ props }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 rounded-lg transition-colors duration-200',
                { 'border-blue-500 bg-blue-500 text-white dark:border-blue-400 dark:bg-blue-400': props.modelValue || !props.modelValue, 'border-gray-300 text-gray-600 bg-white dark:border-blue-900/40 dark:bg-gray-900': props.modelValue == null },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        })
    },
    checkbox: {
        root: ({ props }) => ({
            class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
        }),
        input: ({ props, context }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                { 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900': !context.checked, 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': context.checked },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        }),
        icon: {
            class: ['w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900']
        }
    },
    radiobutton: {
        root: ({ props }) => ({
            class: ['relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6']
        }),
        input: ({ props }) => ({
            class: [
                'flex justify-center items-center',
                'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
                { 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900': props.value !== props.modelValue, 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': props.value == props.modelValue },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        }),
        icon: ({ props }) => ({
            class: [
                'transform rounded-full',
                'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900',
                { 'backface-hidden scale-10 invisible': props.value !== props.modelValue, 'transform scale-100 visible': props.value == props.modelValue }
            ]
        })
    },
    dropdown: {
        root: ({ props }) => ({
            class: [
                'cursor-pointer inline-flex relative select-none',
                'bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300',
                'w-full md:w-56',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        input: ({ props }) => ({
            class: [
                'cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative',
                'bg-transparent border-0 text-gray-800',
                'dark:text-white/80',
                'p-3 transition duration-200 bg-transparent rounded appearance-none font-sans text-base',
                'focus:outline-none focus:shadow-none',
                { 'pr-7': props.showClear }
            ]
        }),
        trigger: {
            class: ['flex items-center justify-center flex-shrink-0', 'bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg']
        },
        wrapper: {
            class: ['max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
        },
        list: {
            class: ['py-3 list-none m-0']
        },
        item: ({ context }) => ({
            class: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                'dark:text-white/80 dark:hover:bg-gray-800',
                'hover:text-gray-700 hover:bg-gray-200',
                { 'text-gray-700 bg-transparent': !context.selected, 'text-blue-600 bg-blue-50 hover:text-blue-600 hover:bg-blue-100 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-700': context.selected }
            ]
        }),
        itemgroup: {
            class: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        header: {
            class: ['p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg', 'dark:bg-gray-800 dark:text-white/80 dark:border-blue-900/40']
        },
        filtercontainer: {
            class: ['relative']
        },
        filterinput: {
            class: [
                'pr-7 -mr-7',
                'w-full',
                'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        filtericon: {
            class: ['-mt-2 absolute top-1/2']
        },
        clearicon: {
            class: ['text-gray-500 right-12 -mt-2 absolute top-1/2']
        }
    },
    calendar: {
        root: {
            class: ['inline-flex max-w-full relative']
        },
        input: {
            class: ['font-sans text-base text-gray-600 bg-white p-3 border border-gray-300 transition-colors duration-200 appearance-none rounded-lg', 'hover:border-blue-500 ']
        },
        panel: {
            class: ['bg-white border-0 shadow-md', 'absolute min-w-[350px]']
        },
        header: {
            class: ['flex items-center justify-between', 'p-2 text-gray-700 bg-white font-semibold m-0 border-b border-gray-300 rounded-t-lg']
        },
        previousbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200'
            ]
        },
        title: {
            class: ['leading-8 mx-auto']
        },
        monthTitle: {
            class: ['text-gray-700 transition duration-200 font-semibold p-2', 'mr-2', 'hover:text-blue-500']
        },
        yearTitle: {
            class: ['text-gray-700 transition duration-200 font-semibold p-2', 'hover:text-blue-500']
        },
        nextbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200'
            ]
        },
        table: {
            class: ['border-collapse w-full', 'my-2']
        },
        tableheadercell: {
            class: ['p-2']
        },
        day: {
            class: ['p-2']
        },
        daylabel: {
            class: ['w-10 h-10 rounded-full transition-shadow duration-200 border-transparent border', 'flex items-center cursor-pointer justify-center mx-auto overflow-hidden relative']
        }
    },
    listbox: {
        root: ({ props }) => ({
            class: ['bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-56']
        }),
        wrapper: {
            class: ['overflow-auto']
        },
        list: {
            class: ['py-3 list-none m-0']
        },
        item: ({ context }) => ({
            class: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                'dark:text-white/80 dark:hover:bg-gray-800',
                'hover:text-gray-700 hover:bg-gray-200',
                { 'text-gray-700 bg-transparent': !context.selected, 'text-blue-600 bg-blue-50 hover:text-blue-600 hover:bg-blue-100 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-700': context.selected }
            ]
        }),
        itemgroup: {
            class: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        header: {
            class: ['p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg', 'dark:bg-gray-800 dark:text-white/80 dark:border-blue-900/40']
        },
        filtercontainer: {
            class: ['relative']
        },
        filterinput: {
            class: [
                'pr-7 -mr-7',
                'w-full',
                'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        filtericon: {
            class: ['-mt-2 absolute top-1/2']
        }
    },
    multiselect: {
        root: ({ props }) => ({
            class: ['inline-flex cursor-pointer select-none', 'bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-80', { 'opacity-60 select-none pointer-events-none cursor-default': props?.disabled }]
        }),
        labelContainer: {
            class: ['overflow-hidden flex flex-auto cursor-pointer']
        },
        label: ({ props, parent, context }) => ({
            class: [
                'block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis',
                'text-gray-800',
                'p-3 transition duration-200',
                {
                    '!p-3': props.display !== 'chip' && (props?.modelValue == null || props?.modelValue == undefined),
                    '!py-1.5 px-3': props.display == 'chip' && props?.modelValue !== null,
                    '!p-3': props.display == 'chip' && props?.modelValue == null
                }
            ]
        }),
        token: {
            class: ['py-1 px-2 mr-2 bg-gray-300 text-gray-700 rounded-full', 'cursor-default inline-flex items-center']
        },
        removeTokenIcon: {
            class: ['ml-2']
        },
        trigger: {
            class: ['flex items-center justify-center flex-shrink-0', 'bg-transparent text-gray-600 w-12 rounded-tr-lg rounded-br-lg']
        },
        panel: {
            class: ['bg-white text-gray-700 border-0 rounded-md shadow-lg']
        },
        header: {
            class: ['p-3 border-b border-gray-300 text-gray-700 bg-gray-100 rounded-t-lg', 'flex items-center justify-between']
        },
        headerCheckboxContainer: {
            class: ['inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6']
        },
        headerCheckbox: ({ props, context }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                { 'border-gray-300 bg-white': !context?.selected, 'border-blue-500 bg-blue-500': context?.selected }
            ]
        }),
        headercheckboxicon: {
            class: ['w-4 h-4 transition-all duration-200 text-white text-base']
        },
        closeButton: {
            class: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: {
            class: ['w-4 h-4 inline-block']
        },
        wrapper: {
            class: ['max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
        },
        list: {
            class: ['py-3 list-none m-0']
        },
        item: ({ context }) => ({
            class: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                'dark:text-white/80 dark:hover:bg-gray-800',
                'hover:text-gray-700 hover:bg-gray-200',
                { 'text-gray-700 bg-transparent': !context.selected, 'text-blue-600 bg-blue-50 hover:text-blue-600 hover:bg-blue-100 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-700': context.selected }
            ]
        }),
        checkboxContainer: {
            class: ['inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6']
        },
        checkbox: ({ context }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                { 'border-gray-300 bg-white': !context?.selected, 'border-blue-500 bg-blue-500': context?.selected }
            ]
        }),
        checkboxicon: {
            class: ['w-4 h-4 transition-all duration-200 text-white text-base']
        },
        itemgroup: {
            class: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        filtercontainer: {
            class: ['relative']
        },
        filterinput: {
            class: [
                'pr-7 -mr-7',
                'w-full',
                'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        filtericon: {
            class: ['-mt-2 absolute top-1/2']
        },
        clearicon: {
            class: ['text-gray-500 right-12 -mt-2 absolute top-1/2']
        }
    },
    textarea: {
        root: ({ context }) => ({
            class: [
                'm-0',
                'font-sans text-base text-gray-600 bg-white p-3 border border-gray-300 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled }
            ]
        })
    },
    treeselect: {
        root: ({ props }) => ({
            class: ['inline-flex cursor-pointer select-none', 'bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-80', { 'opacity-60 select-none pointer-events-none cursor-default': props?.disabled }]
        }),
        labelContainer: {
            class: ['overflow-hidden flex flex-auto cursor-pointer']
        },
        label: ({ props }) => ({
            class: ['block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-gray-800', 'p-3 transition duration-200']
        }),
        trigger: {
            class: ['flex items-center justify-center flex-shrink-0', 'bg-transparent text-gray-600 w-12 rounded-tr-lg rounded-br-lg']
        },
        panel: {
            class: ['bg-white text-gray-700 border-0 rounded-md shadow-lg']
        },
        wrapper: {
            class: ['max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
        }
        // tree: {
        //     class: ['border border-solid border-gray-300 bg-white text-gray-700 p-5 rounded-md']
        // },
        // container: {
        //     class: ['m-0 p-0 list-none overflow-auto']
        // },
        // node: {
        //     class: ['p-0.5 outline-none']
        // },
        // content: {
        //     class: ['rounded-md shadow-sm transition-shadow duration-200 p-2', 'flex items-center', 'cursor-pointer select-none', 'hover:text-gray-700 hover:bg-gray-200']
        // }
    },
    autocomplete: {
        root: ({ props }) => ({
            class: ['relative inline-flex', { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }, { 'w-full': props.multiple }]
        }),
        container: {
            class: [
                'm-0 list-none cursor-text overflow-hidden flex items-center flex-wrap w-full',
                'px-3 py-2 gap-2',
                'font-sans text-base text-gray-700 bg-white border border-gray-300 transition duration-200 ease-in-out appearance-none rounded-md',
                'focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] hover:border-blue-500 focus:outline-none'
            ]
        },
        inputtoken: {
            class: ['py-0.375rem px-0', 'flex-1 inline-flex']
        },
        input: ({ props }) => ({
            class: [
                'm-0',
                ' transition-colors duration-200 appearance-none rounded-lg',
                ' ',
                { 'rounded-tr-none rounded-br-none': props.dropdown },
                {
                    'font-sans text-base text-gray-700 bg-white p-3 border border-gray-300 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] hover:border-blue-500 focus:outline-none': !props.multiple,
                    'font-sans text-base text-gray-700 border-0 outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full': props.multiple
                }
            ]
        }),
        token: {
            class: ['py-1 px-2 mr-2 bg-gray-300 text-gray-700 rounded-full', 'cursor-default inline-flex items-center']
        },
        dropdownbutton: {
            root: {
                class: ['rounded-tl-none rounded-bl-none']
            }
        },
        panel: {
            class: ['bg-white text-gray-700 border-0 rounded-md shadow-lg', 'max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
        },
        list: {
            class: ['py-3 list-none m-0']
        },
        item: ({ context }) => ({
            class: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                'dark:text-white/80 dark:hover:bg-gray-800',
                'hover:text-gray-700 hover:bg-gray-200',
                { 'text-gray-700 bg-transparent': !context.selected, 'text-blue-600 bg-blue-50 hover:text-blue-600 hover:bg-blue-100 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-700': context.selected }
            ]
        }),
        itemgroup: {
            class: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        }
    },
    chips: {
        root: ({ props }) => ({
            class: ['flex', { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
        }),
        container: {
            class: [
                'm-0 py-1.5 px-3 list-none cursor-text overflow-hidden flex items-center flex-wrap',
                'w-full',
                'm-0',
                'font-sans text-base text-gray-600 bg-white p-3 border border-gray-300 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },

        inputtoken: {
            class: ['py-1.5 px-0', 'flex flex-1 inline-flex']
        },
        input: {
            class: ['font-sans text-base text-gray-700 p-0 m-0', 'border-0 outline-none bg-transparent shadow-none rounded-none w-full']
        },
        token: {
            class: ['py-1 px-2 mr-2 bg-gray-300 text-gray-700 rounded-full', 'cursor-default inline-flex items-center']
        },
        removeTokenIcon: {
            class: ['ml-2']
        }
    },
    colorpicker: {
        root: ({ props }) => ({
            class: ['inline-block', { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
        }),
        input: {
            class: [
                'm-0',
                'font-sans text-base text-gray-600 bg-white p-3 border border-gray-300 transition-colors duration-200  rounded-lg cursor-pointer',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
                'w-8 h-8'
            ]
        },
        panel: ({ props }) => ({
            class: ['shadow-md', 'bg-gray-800 border-gray-900', { 'relative h-48 w-52': props.inline, 'absolute h-48 w-52': !props.inline }]
        }),
        selector: {
            class: ['absolute h-44 w-40 top-2 left-2']
        },
        color: {
            class: ['h-44 w-40'],
            style: 'background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)'
        },
        colorhandle: {
            class: ['rounded-full border border-solid cursor-pointer h-3 w-3 absolute  opacity-85', 'border-white']
        },
        hue: {
            class: ['h-44 w-6 absolute top-2 left-44 opacity-85'],
            style: 'background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)'
        },
        huehandle: {
            class: ['border-solid border-2 cursor-pointer h-2 w-8 left-0 -ml-1 -mt-1 opacity-85 absolute']
        }
    },
    editor: {
        toolbar: {
            class: ['bg-gray-100 rounded-tr-md rounded-tl-md', 'border border-gray-300 box-border font-sans px-2 py-1']
        },
        formats: {
            class: ['inline-block align-middle', 'mr-4']
        },
        header: {
            class: ['text-gray-700 inline-block float-left text-base font-medium h-6 relative align-middle', 'w-28', 'border-0 text-gray-600']
        }
    },
    //MISC

    badge: {
        root: ({ props }) => ({
            class: [
                'rounded-full p-0 text-center inline-block',
                'bg-blue-500 text-white font-bold',
                {
                    'bg-gray-500 ': props.severity == 'secondary',
                    'bg-green-500 ': props.severity == 'success',
                    'bg-blue-500 ': props.severity == 'info',
                    'bg-orange-500 ': props.severity == 'warning',
                    'bg-purple-500 ': props.severity == 'help',
                    'bg-red-500 ': props.severity == 'danger'
                },
                { 'text-xs min-w-[1.5rem] h-[1.5rem] leading-[1.5rem]': props.size == null, 'text-lg min-w-[2.25rem] h-[2.25rem] leading-[2.25rem]': props.size == 'large', 'text-2xl min-w-[3rem] h-[3rem] leading-[3rem]': props.size == 'xlarge' }
            ]
        })
    },
    avatar: {
        root: ({ props, parent }) => ({
            class: [
                'flex items-center justify-center',
                'bg-gray-300',
                { 'rounded-lg': props.shape == 'square', 'rounded-full': props.shape == 'circle' },
                { 'text-base h-8 w-8': props.size == null || props.size == 'normal', 'w-12 h-12 text-xl': props.size == 'large', 'w-16 h-16 text-2xl': props.size == 'xlarge' }
            ]
        }),
        image: {
            class: ['h-full w-full']
        }
    },
    avatargroup: {
        root: {
            class: ['flex items-center']
        }
    },
    chip: {
        root: {
            class: ['inline-flex items-center', 'bg-gray-200 text-gray-800 rounded-[16px] px-3']
        },
        label: {
            class: ['leading-6 mt-1.5 mb-1.5']
        },
        icon: {
            class: ['leading-6 mr-2']
        },
        image: {
            class: ['w-9 h-9 ml-[-0.75rem] mr-2', 'rounded-full']
        },
        removeIcon: {
            class: ['ml-2 rounded-md transition duration-200 ease-in-out', 'cursor-pointer leading-6']
        }
    },
    progressbar: {
        root: ({ props }) => ({
            class: ['overflow-hidden relative', 'border-0 h-6 bg-gray-200 rounded-md']
        }),
        value: ({ props }) => ({
            class: [
                'transition-width duration-1000 ease-in-out',
                'items-center border-0 flex h-full justify-center overflow-hidden absolute w-0',
                'border-0 m-0 bg-blue-500',
                { 'before:absolute before:bottom-0 before:top-0 before:left-0 before:inherit before:bg-inherit': props.mode == 'indeterminate' }
            ]
        }),
        label: {
            class: ['inline-flex', 'text-white leading-6']
        }
    },

    //MENU

    breadcrumb: {
        root: {
            class: ['overflow-x-auto', 'bg-white border border-gray-300 rounded-md p-4']
        },
        menu: {
            class: ['m-0 p-0 list-none flex items-center flex-nowrap']
        },
        action: {
            class: ['text-decoration-none flex items-center', 'transition-shadow duration-200 rounded-md text-gray-600', 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]']
        },
        icon: {
            class: ['text-gray-600']
        },
        separator: {
            class: ['mx-2 text-gray-600', 'flex items-center']
        }
    },
    contextmenu: {
        root: {
            class: ['py-1 bg-white text-gray-700 border-none shadow-md rounded-lg w-52']
        },
        menu: {
            class: ['m-0 p-0 list-none', 'outline-none']
        },
        menuitem: {
            class: ['relative']
        },
        content: {
            class: ['text-gray-700 transition-shadow duration-200 rounded-none', 'hover:text-gray-700 hover:bg-gray-200']
        },
        action: {
            class: ['cursor-pointer flex items-center no-underline overflow-hidden relative', 'text-gray-700 py-3 px-5 select-none']
        },
        icon: {
            class: ['text-gray-600 mr-2']
        },
        label: {
            class: ['text-gray-600', '']
        }
    },
    dock: {
        root: ({ props }) => ({
            class: [
                'absolute z-1 flex justify-center items-center pointer-events-none',
                { 'left-0 bottom-0 w-full': props.position == 'bottom', 'left-0 top-0 w-full': props.position == 'top', 'left-0 top-0 h-full': props.position == 'left', 'right-0 top-0 h-full': props.position == 'right' }
            ]
        }),
        container: {
            class: ['flex pointer-events-auto', 'bg-white/10 border-white/20 p-2 border rounded-md']
        },
        menu: ({ props }) => ({
            class: [
                'm-0 p-0 list-none flex items-center justify-center',
                'outline-none',
                {
                    'flex-col': props.position == 'left' || props.position == 'right'
                }
            ]
        }),
        menuitem: ({ props }) => ({
            class: [
                'p-2 rounded-md',
                'transition-all duration-200 ease-cubic-bezier-will-change-transform transform ',
                'hover:scale-150 hover:mx-6',
                {
                    'origin-bottom': props.position == 'bottom',
                    'origin-top': props.position == 'top',
                    'origin-left': props.position == 'left',
                    'origin-right': props.position == 'right'
                }
            ]
        }),
        action: {
            class: ['flex flex-col items-center justify-center relative overflow-hidden cursor-default', 'w-16 h-16']
        }
    },

    menu: {
        root: {
            class: ['py-1 bg-white text-gray-700 border border-gray-300 rounded-md w-48	']
        },
        menu: {
            class: ['m-0 p-0 list-none', 'outline-none']
        },
        content: {
            class: ['text-gray-700 transition-shadow duration-200 rounded-none', 'hover:text-gray-700 hover:bg-gray-200']
        },
        action: {
            class: ['text-gray-700 py-3 px-5 select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative']
        },
        icon: {
            class: ['text-gray-600 mr-2"']
        },
        submenuheader: {
            class: ['m-0 p-3 text-gray-700 bg-white font-bold rounded-tl-none rounded-tr-none']
        }
    },

    menubar: {
        root: {
            class: ['p-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md', 'flex items-center']
        },
        menu: {
            class: ['m-0 p-0 list-none', 'outline-none', 'flex items-center flex-wrap']
        },
        menuitem: {
            class: ['relative']
        },
        content: ({ props, context }) => ({
            class: [
                ' transition-shadow duration-200',
                { 'rounded-md': props.root, 'hover:text-gray-700 hover:bg-gray-200': !props.root },
                { 'text-gray-700 hover:text-gray-700 hover:bg-gray-200': !context.active && props.root, 'text-blue-600 bg-blue-50': context.active && props.root }
            ]
        }),
        action: ({ props, context }) => ({
            class: ['text-gray-700 select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative', 'py-3 px-5 select-none']
        }),
        icon: {
            class: ['text-gray-600 mr-2']
        },
        submenuicon: {
            class: ['text-gray-600 ml-2']
        },
        submenu: {
            class: ['py-1  bg-white border-0 shadow-sm w-48', 'absolute z-10', 'm-0 list-none']
        }
    },

    // DATA
    timeline: {
        root: ({ props }) => ({
            class: [
                'flex flex-grow',
                {
                    'flex-col': props.layout === 'vertical',
                    'flex-row flex-1': props.layout === 'horizontal'
                }
            ]
        }),
        event: ({ props, context }) => ({
            class: [
                'flex relative min-h-[70px]',
                {
                    'flex-row-reverse': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1),
                    'flex-col flex-1': props.layout === 'horizontal',
                    'flex-col-reverse ': props.align === 'bottom' || (props.layout === 'horizontal' && props.align === 'alternate' && context.index % 2 === 1)
                }
            ]
        }),
        opposite: ({ props, context }) => ({
            class: [
                'flex-1',
                {
                    'px-4': props.layout === 'vertical',
                    'py-4': props.layout === 'horizontal'
                },
                {
                    'text-right': props.align === 'left' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 0),
                    'text-left': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1)
                }
            ]
        }),
        separator: ({ props }) => ({
            class: [
                'flex items-center flex-initial',
                {
                    'flex-col': props.layout === 'vertical',
                    'flex-row': props.layout === 'horizontal'
                }
            ]
        }),
        marker: {
            class: ['flex self-baseline w-4 h-4 rounded-full border-2 border-blue-500 bg-white dark:border-blue-300 dark:bg-blue-900/40']
        },
        connector: ({ props }) => ({
            class: [
                'flex-grow bg-gray-300 dark:bg-blue-900/40',
                {
                    'w-[2px]': props.layout === 'vertical',
                    'w-full h-[2px]': props.layout === 'horizontal'
                }
            ]
        }),
        content: ({ props, context }) => ({
            class: [
                'flex-1',
                {
                    'px-4': props.layout === 'vertical',
                    'py-4': props.layout === 'horizontal'
                },
                {
                    'text-left': props.align === 'left' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 0),
                    'text-right': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1)
                },
                {
                    'min-h-0': props.layout === 'vertical' && context.index === context.count,
                    'flex-grow-0': props.layout === 'horizontal' && context.index === context.count
                }
            ]
        })
    },
    dataview: {
        content: {
            class: [
                'bg-white blue-gray-700 border-0 p-0',
                'bg-gray-900 dark:text-white/80' // Dark Mode
            ]
        },
        grid: {
            class: 'flex flex-wrap ml-0 mr-0 mt-0'
        },
        header: {
            class: 'bg-gray-100 text-blue-gray-800 border-gray-200 border-t border-b p-4 font-bold'
        }
    },
    dataviewlayoutoptions: {
        listbutton: ({ props }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-r-none',
                props.modelValue === 'list' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // highlighted state
            ]
        }),
        gridbutton: ({ props }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-l-none',
                props.modelValue === 'grid' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // highlighted state
            ]
        })
    },
    organizationchart: {
        table: {
            class: 'mx-auto my-0 border-spacing-0 border-separate'
        },
        cell: {
            class: 'text-center align-top py-0 px-3'
        },
        node: {
            class: [
                'relative inline-block bg-white border border-gray-300 text-gray-600 p-5',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' // Dark Mode
            ]
        },
        linecell: {
            class: 'text-center align-top py-0 px-3'
        },
        linedown: {
            class: [
                'mx-auto my-0 w-px h-[20px] bg-gray-300',
                'dark:bg-blue-900/40' //Dark Mode
            ]
        },
        lineleft: ({ context }) => ({
            class: [
                'text-center align-top py-0 px-3 rounded-none border-r border-gray-300',
                {
                    'border-t': context.lineTop
                },
                'dark:border-blue-900/40' //Dark Mode
            ]
        }),
        lineright: ({ context }) => ({
            class: [
                'text-center align-top py-0 px-3 rounded-none',
                {
                    'border-t border-gray-300': context.lineTop
                },
                'dark:border-blue-900/40' //Dark Mode
            ]
        }),
        nodecell: {
            class: 'text-center align-top py-0 px-3'
        },
        nodetoggler: {
            class: [
                'absolute bottom-[-0.75rem] left-2/4 -ml-3 w-6 h-6 bg-inherit text-inherit rounded-full z-2 cursor-pointer no-underline select-none',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]' // Focus styles
            ]
        },
        nodetogglericon: {
            class: 'relative inline-block w-4 h-4'
        }
    },
    orderlist: {
        root: {
            class: 'flex'
        },
        controls: {
            class: 'flex flex-col justify-center p-5'
        },
        moveupbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        movetopbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        movedownbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        movebottombutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        container: {
            class: 'flex-auto'
        },
        header: {
            class: [
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            ]
        },
        list: {
            class: [
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            ]
        },
        item: ({ context }) => ({
            class: [
                'relative cursor-pointer overflow-hidden',
                'py-3 px-5 m-0 border-none text-gray-600 dark:text-white/80',
                'transition duration-200',
                {
                    'text-blue-700 bg-blue-500/20 dark:bg-blue-300/20': context.active && !context.focused,
                    'text-blue-700 bg-blue-500/30 dark:bg-blue-300/30': context.active && context.focused,
                    'text-gray-600 bg-gray-300 dark:bg-blue-900/40': !context.active && context.focused
                }
            ]
        })
    },
    picklist: {
        root: {
            class: 'flex'
        },
        sourcecontrols: {
            class: 'flex flex-col justify-center p-5'
        },
        sourcemoveupbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        sourcemovetopbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        sourcemovedownbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        sourcemovebottombutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        sourcewrapper: {
            class: 'grow shrink basis-2/4'
        },
        sourceheader: {
            class: [
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            ]
        },
        sourcelist: {
            class: [
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            ]
        },
        item: ({ context }) => ({
            class: [
                'relative cursor-pointer overflow-hidden',
                'py-3 px-5 m-0 border-none text-gray-600 dark:text-white/80',
                'transition duration-200',
                {
                    'text-blue-700 bg-blue-500/20 dark:bg-blue-300/20': context.active && !context.focused,
                    'text-blue-700 bg-blue-500/30 dark:bg-blue-300/30': context.active && context.focused,
                    'text-gray-600 bg-gray-300 dark:bg-blue-900/40': !context.active && context.focused
                }
            ]
        }),
        buttons: {
            class: 'flex flex-col justify-center p-5'
        },
        movetotargetbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        movealltotargetbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        movetosourcebutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        movealltosourcebutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        targetcontrols: {
            class: 'flex flex-col justify-center p-5'
        },
        targetmoveupbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        targetmovetopbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        targetmovedownbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        targetmovebottombutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            })
        },
        targetwrapper: {
            class: 'grow shrink basis-2/4'
        },
        targetheader: {
            class: [
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            ]
        },
        targetlist: {
            class: [
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            ]
        }
    },
    paginator: {
        root: {
            class: [
                'flex items-center justify-center flex-wrap',
                'bg-white text-gray-500 border-0 px-4 py-2 rounded-md',
                'dark:bg-gray-900 dark:text-white/60 dark:border-blue-900/40' // Dark Mode
            ]
        },
        firstpagebutton: ({ context }) => ({
            class: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500  min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        previouspagebutton: ({ context }) => ({
            class: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        nextpagebutton: ({ context }) => ({
            class: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        lastpagebutton: ({ context }) => ({
            class: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        pagebutton: ({ context }) => ({
            class: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:border-blue-300 dark:text-white', // Dark Mode
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                {
                    'bg-blue-50 border-blue-50 text-blue-700 dark:bg-blue-300': context.active
                }
            ]
        }),
        rowperpagedropdown: {
            root: ({ props, state }) => ({
                class: [
                    'inline-flex relative cursor-pointer user-none',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                ]
            }),
            input: {
                class: [
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    'dark:text-white' //Dark Mode
                ]
            },
            trigger: {
                class: ['flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md']
            },
            panel: {
                class: [
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                ]
            },
            wrapper: {
                class: 'overflow-auto'
            },
            list: {
                class: 'm-0 p-0 py-3 list-none'
            },
            item: ({ context }) => ({
                class: [
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                ]
            })
        },
        jumptopageinput: {
            root: {
                class: 'inline-flex mx-2'
            },
            input: {
                class: [
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border border-gray-300 pr-0',
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] focus:border-blue-300',
                    'dark:text-white dark:bg-gray-950 dark:border-blue-900/40', //Dark Mode
                    'm-0 flex-auto max-w-[3rem]'
                ]
            }
        },
        jumptopagedropdown: {
            root: ({ props, state }) => ({
                class: [
                    'inline-flex relative cursor-pointer user-none',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                ]
            }),
            input: {
                class: [
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    'dark:text-white' //Dark Mode
                ]
            },
            trigger: {
                class: ['flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md']
            },
            panel: {
                class: [
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                ]
            },
            wrapper: {
                class: 'overflow-auto'
            },
            list: {
                class: 'm-0 p-0 py-3 list-none'
            },
            item: ({ context }) => ({
                class: [
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                ]
            })
        }
    },
    treetable: {
        root: ({ props }) => ({
            class: [
                'relative',
                {
                    'flex flex-col h-full': props.scrollHeight === 'flex'
                }
            ]
        }),
        loadingoverlay: {
            class: [
                'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                'transition duration-200',
                'absolute flex items-center justify-center z-2',
                'dark:bg-gray-950/40' // Dark Mode
            ]
        },
        loadingicon: {
            class: 'w-8 h-8'
        },
        header: {
            class: [
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            ]
        },
        wrapper: ({ props }) => ({
            class: [
                {
                    'relative overflow-auto': props.scrollable,
                    'overflow-x-auto': props.resizableColumns
                }
            ]
        }),
        footer: {
            class: [
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            ]
        },
        table: {
            class: 'border-collapse table-fixed w-full'
        },
        thead: ({ props }) => ({
            class: [
                {
                    'block sticky top-0 z-[1]': props.scrollable
                }
            ]
        }),
        tbody: ({ props }) => ({
            class: [
                {
                    block: props.scrollable
                }
            ]
        }),
        tfoot: ({ props }) => ({
            class: [
                {
                    block: props.scrollable
                }
            ]
        }),
        headerrow: ({ props }) => ({
            class: [
                {
                    'flex flex-nowrap w-full': props.scrollable
                }
            ]
        }),
        row: ({ context }) => ({
            class: [
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80' : 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
                {
                    'hover:bg-gray-300/20 hover:text-gray-600 dark:hover:bg-gray-950': context.selectable && !context.selected, // Hover
                    'flex flex-nowrap w-full': context.scrollable
                }
            ]
        }),
        column: {
            headercell: ({ context }) => ({
                class: [
                    'text-left border-gray-300 border font-bold',
                    'transition duration-200',
                    context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', //Dark Mode
                    {
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && context.scrollDirection === 'both' && !context.frozen,
                        'sticky z-[1]': context.scrollable && context.scrollDirection === 'both' && context.frozen,
                        'border-x-0 border-l-0 border-t-0': !context.showGridlines,
                        'overflow-hidden relative bg-clip-padding': context.resizable && !context.frozen
                    }
                ]
            }),
            bodycell: ({ context }) => ({
                class: [
                    'text-left border-gray-300 border',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:border-blue-900/40', //Dark Mode
                    {
                        'cursor-pointer': context.selectable,
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && context.scrollDirection === 'both' && !context.frozen,
                        sticky: context.scrollable && context.scrollDirection === 'both' && context.frozen,
                        'border-x-0 border-l-0': !context.showGridlines
                    }
                ]
            }),
            rowtoggler: ({ context }) => ({
                class: [
                    'relative inline-flex items-center justify-center align-center cursor-pointer select-none overflow-hidden bg-transparent',
                    'w-8 h-8 border-0 rounded mr-0.5',
                    context.selected ? 'text-blue-700' : 'text-gray-500',
                    'dark:text-white/70' //Dark Mode
                ]
            }),
            sorticon: ({ context }) => ({
                class: ['ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70']
            }),
            sortbadge: {
                class: [
                    'h-[1.143rem] min-w-[1.143rem] leading-[1.143rem] text-blue-700 bg-blue-50 ml-2 rounded-[50%]',
                    'dark:text-white/80 dark:bg-blue-500/40' // Dark Mode
                ]
            },
            columnresizer: {
                class: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent'
            },
            checkboxwrapper: {
                class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6 mr-2']
            },
            checkbox: ({ context }) => ({
                class: [
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled
                    }
                ]
            }),
            checkboxicon: ({ context }) => ({
                class: [
                    'w-4 h-4 transition-all duration-200 text-base dark:text-gray-900',
                    {
                        'text-white': context.checked
                    }
                ]
            })
        },
        resizehelper: {
            class: ['absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300']
        }
    },
    datatable: {
        root: ({ props }) => ({
            class: [
                'relative',
                {
                    'flex flex-col h-full': props.scrollable && props.scrollHeight === 'flex'
                }
            ]
        }),
        loadingoverlay: {
            class: [
                'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                'transition duration-200',
                'absolute flex items-center justify-center z-2',
                'dark:bg-gray-950/40' // Dark Mode
            ]
        },
        loadingicon: {
            class: 'w-8 h-8'
        },
        wrapper: ({ props }) => ({
            class: [
                {
                    relative: props.scrollable,
                    'flex flex-col grow h-full': props.scrollable && props.scrollHeight === 'flex'
                }
            ]
        }),
        header: ({ props }) => ({
            class: [
                'bg-slate-50 text-slate-700 border-gray-300 font-bold p-4',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', // Dark Mode
                props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0'
            ]
        }),
        table: {
            class: 'w-full border-spacing-0'
        },
        thead: ({ context }) => ({
            class: [
                {
                    'bg-slate-50 top-0 z-[1]': context.scrollable
                }
            ]
        }),
        tbody: ({ instance, context }) => ({
            class: [
                {
                    'sticky z-[1]': instance.frozenRow && context.scrollable
                }
            ]
        }),
        tfoot: ({ context }) => ({
            class: [
                {
                    'bg-slate-50 bottom-0 z-[1]': context.scrollable
                }
            ]
        }),
        footer: {
            class: [
                'bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-gray-300 font-bold p-4',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
            ]
        },
        column: {
            headercell: ({ context, props }) => ({
                class: [
                    'text-left border-0 border-b border-solid border-gray-300 dark:border-blue-900/40 font-bold',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50 text-slate-700', // Sort
                    context.sorted ? 'dark:text-white/80 dark:bg-blue-300' : 'dark:text-white/80 dark:bg-gray-900', // Dark Mode
                    {
                        'sticky z-[1]': props.frozen || props.frozen === '', // Frozen Columns
                        'border-x border-y': context?.showGridlines,
                        'overflow-hidden space-nowrap border-y relative bg-clip-padding': context.resizable // Resizable
                    }
                ]
            }),
            headercontent: {
                class: 'flex items-center'
            },
            bodycell: ({ props, context }) => ({
                class: [
                    'text-left border-0 border-b border-solid border-gray-300',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:border-blue-900/40', // Dark Mode
                    {
                        'sticky bg-inherit': props.frozen || props.frozen === '', // Frozen Columns
                        'border-x border-y': context?.showGridlines
                    }
                ]
            }),
            footercell: ({ context }) => ({
                class: [
                    'text-left border-0 border-b border-solid border-gray-300 font-bold',
                    'bg-slate-50 text-slate-700',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:bg-gray-900 dark:border-blue-900/40', // Dark Mode
                    {
                        'border-x border-y': context?.showGridlines
                    }
                ]
            }),
            sorticon: ({ context }) => ({
                class: ['ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70']
            }),
            sortbadge: {
                class: [
                    'flex items-center justify-center align-middle',
                    'rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2',
                    'text-blue-700 bg-blue-50',
                    'dark:text-white/80 dark:bg-blue-400' // Dark Mode
                ]
            },
            columnfilter: {
                class: 'inline-flex items-center ml-auto'
            },
            filteroverlay: {
                class: [
                    'bg-white text-gray-600 border-0 rounded-md min-w-[12.5rem]',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //Dark Mode
                ]
            },
            filtermatchmodedropdown: {
                root: {
                    class: 'flex'
                }
            },
            filterrowitems: {
                class: 'm-0 p-0 py-3 list-none '
            },
            filterrowitem: ({ context }) => ({
                class: ['m-0 py-3 px-5 bg-transparent', 'transition duration-200', context?.highlighted ? 'text-blue-700 bg-blue-100 dark:text-white/80 dark:bg-blue-300' : 'text-gray-600 bg-transparent dark:text-white/80 dark:bg-transparent']
            }),
            filteroperator: {
                class: [
                    'px-5 py-3 border-b border-solid border-gray-300 text-slate-700 bg-slate-50 rounded-t-md',
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
                ]
            },
            filterconstraint: {
                class: 'p-5 border-b border-solid border-gray-300 dark:border-blue-900/40'
            },
            filteraddrule: {
                class: 'py-3 px-5'
            },
            filteraddrulebutton: {
                root: {
                    class: 'justify-center'
                },
                label: {
                    class: 'grow-0'
                }
            },
            filterremovebutton: {
                root: {
                    class: 'ml-2'
                },
                label: {
                    class: 'grow-0'
                }
            },
            filterbuttonbar: {
                class: 'flex items-center justify-space-between p-5'
            },
            filtermenubutton: ({ context }) => ({
                class: [
                    'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2',
                    'w-8 h-8 rounded-[50%]',
                    'transition duration-200',
                    'hover:text-slate-700 hover:bg-gray-300/20', // Hover
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                    'dark:text-white/70 dark:hover:text-white/80 dark:bg-gray-900', // Dark Mode
                    {
                        'bg-blue-50 text-blue-700': context.active
                    }
                ]
            }),
            headerfilterclearbutton: ({ context }) => ({
                class: [
                    'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative',
                    'text-left bg-transparent m-0 p-0 border-none select-none ml-2',
                    {
                        invisible: !context.hidden
                    }
                ]
            }),
            columnresizer: {
                class: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent'
            },
            rowreordericon: {
                class: 'cursor-move'
            },
            roweditorinitbutton: {
                class: [
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                ]
            },
            roweditorsavebutton: {
                class: [
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                ]
            },
            roweditorcancelbutton: {
                class: [
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                ]
            },
            radiobuttonwrapper: {
                class: ['relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6']
            },
            radiobutton: ({ context }) => ({
                class: [
                    'flex justify-center items-center',
                    'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                ]
            }),
            radiobuttonicon: ({ context }) => ({
                class: ['transform rounded-full', 'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900', { 'backface-hidden scale-10 invisible': context.checked === false, 'transform scale-100 visible': context.checked === true }]
            }),
            headercheckboxwrapper: {
                class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
            },
            headercheckbox: ({ context }) => ({
                class: [
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                ]
            }),
            headercheckboxicon: {
                class: ['w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900']
            },
            checkboxwrapper: {
                class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
            },
            checkbox: ({ context }) => ({
                class: [
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                ]
            }),
            checkboxicon: {
                class: ['w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900']
            }
        },
        bodyrow: ({ context }) => ({
            class: [
                context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300' : 'bg-white text-gray-600 dark:bg-gray-900',
                context.stripedRows ? (context.index % 2 === 0 ? 'bg-white text-gray-600 dark:bg-gray-900' : 'bg-blue-50/50 text-gray-600 dark:bg-gray-950') : 'bg-white text-gray-600 dark:bg-gray-900',
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                'dark:text-white/80 dark:focus:outline dark:focus:outline-[0.15rem] dark:focus:outline-blue-300 dark:focus:outline-offset-[-0.15rem]', // Dark Mode
                {
                    'cursor-pointer': context.selectable,
                    'hover:bg-gray-300/20 hover:text-gray-600': context.selectable && !context.selected // Hover
                }
            ]
        }),
        rowexpansion: {
            class: 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80'
        },
        rowgroupheader: {
            class: ['sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200']
        },
        rowgroupfooter: {
            class: ['sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200']
        },
        rowgrouptoggler: {
            class: [
                'text-left m-0 p-0 cursor-pointer select-none',
                'inline-flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-[50%]',
                'transition duration-200',
                'dark:text-white/70' // Dark Mode
            ]
        },
        rowgrouptogglericon: {
            class: 'inline-block w-4 h-4'
        },
        resizehelper: {
            class: ['absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300']
        }
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true, pt: tailwindLight });

    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService);
    nuxtApp.vueApp.use(DialogService);

    nuxtApp.vueApp.directive('badge', BadgeDirective);
    nuxtApp.vueApp.directive('tooltip', Tooltip);
    nuxtApp.vueApp.directive('ripple', Ripple);
    nuxtApp.vueApp.directive('styleclass', StyleClass);
    nuxtApp.vueApp.directive('focustrap', FocusTrap);
    nuxtApp.vueApp.directive('code', CodeHighlight);

    nuxtApp.vueApp.component('Accordion', Accordion);
    nuxtApp.vueApp.component('AccordionTab', AccordionTab);
    nuxtApp.vueApp.component('Avatar', Avatar);
    nuxtApp.vueApp.component('AvatarGroup', AvatarGroup);
    nuxtApp.vueApp.component('AutoComplete', AutoComplete);
    nuxtApp.vueApp.component('Badge', Badge);
    nuxtApp.vueApp.component('BlockUI', BlockUI);
    nuxtApp.vueApp.component('Breadcrumb', Breadcrumb);
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('Calendar', Calendar);
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Carousel', Carousel);
    nuxtApp.vueApp.component('CascadeSelect', CascadeSelect);
    nuxtApp.vueApp.component('Chart', Chart);
    nuxtApp.vueApp.component('Checkbox', Checkbox);
    nuxtApp.vueApp.component('Chip', Chip);
    nuxtApp.vueApp.component('Chips', Chips);
    nuxtApp.vueApp.component('ColorPicker', ColorPicker);
    nuxtApp.vueApp.component('Column', Column);
    nuxtApp.vueApp.component('ColumnGroup', ColumnGroup);
    nuxtApp.vueApp.component('ConfirmDialog', ConfirmDialog);
    nuxtApp.vueApp.component('ConfirmPopup', ConfirmPopup);
    nuxtApp.vueApp.component('ContextMenu', ContextMenu);
    nuxtApp.vueApp.component('DataTable', DataTable);
    nuxtApp.vueApp.component('DataView', DataView);
    nuxtApp.vueApp.component('DataViewLayoutOptions', DataViewLayoutOptions);
    nuxtApp.vueApp.component('DeferredContent', DeferredContent);
    nuxtApp.vueApp.component('Dialog', Dialog);
    nuxtApp.vueApp.component('DynamicDialog', DynamicDialog);
    nuxtApp.vueApp.component('Divider', Divider);
    nuxtApp.vueApp.component('Dock', Dock);
    nuxtApp.vueApp.component('Dropdown', Dropdown);
    nuxtApp.vueApp.component('Editor', Editor);
    nuxtApp.vueApp.component('Fieldset', Fieldset);
    nuxtApp.vueApp.component('FileUpload', FileUpload);
    nuxtApp.vueApp.component('Image', Image);
    nuxtApp.vueApp.component('InlineMessage', InlineMessage);
    nuxtApp.vueApp.component('Inplace', Inplace);
    nuxtApp.vueApp.component('InputMask', InputMask);
    nuxtApp.vueApp.component('InputNumber', InputNumber);
    nuxtApp.vueApp.component('InputSwitch', InputSwitch);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Knob', Knob);
    nuxtApp.vueApp.component('Listbox', Listbox);
    nuxtApp.vueApp.component('MegaMenu', MegaMenu);
    nuxtApp.vueApp.component('Menu', Menu);
    nuxtApp.vueApp.component('Menubar', Menubar);
    nuxtApp.vueApp.component('Message', Message);
    nuxtApp.vueApp.component('MultiSelect', MultiSelect);
    nuxtApp.vueApp.component('OrderList', OrderList);
    nuxtApp.vueApp.component('OrganizationChart', OrganizationChart);
    nuxtApp.vueApp.component('OverlayPanel', OverlayPanel);
    nuxtApp.vueApp.component('Paginator', Paginator);
    nuxtApp.vueApp.component('Panel', Panel);
    nuxtApp.vueApp.component('PanelMenu', PanelMenu);
    nuxtApp.vueApp.component('Password', Password);
    nuxtApp.vueApp.component('PickList', PickList);
    nuxtApp.vueApp.component('ProgressBar', ProgressBar);
    nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner);
    nuxtApp.vueApp.component('RadioButton', RadioButton);
    nuxtApp.vueApp.component('Rating', Rating);
    nuxtApp.vueApp.component('Row', Row);
    nuxtApp.vueApp.component('ScrollPanel', ScrollPanel);
    nuxtApp.vueApp.component('ScrollTop', ScrollTop);
    nuxtApp.vueApp.component('SelectButton', SelectButton);
    nuxtApp.vueApp.component('Slider', Slider);
    nuxtApp.vueApp.component('Sidebar', Sidebar);
    nuxtApp.vueApp.component('Skeleton', Skeleton);
    nuxtApp.vueApp.component('SpeedDial', SpeedDial);
    nuxtApp.vueApp.component('SplitButton', SplitButton);
    nuxtApp.vueApp.component('Splitter', Splitter);
    nuxtApp.vueApp.component('SplitterPanel', SplitterPanel);
    nuxtApp.vueApp.component('Steps', Steps);
    nuxtApp.vueApp.component('TabView', TabView);
    nuxtApp.vueApp.component('TabPanel', TabPanel);
    nuxtApp.vueApp.component('TabMenu', TabMenu);
    nuxtApp.vueApp.component('Tag', Tag);
    nuxtApp.vueApp.component('Terminal', Terminal);
    nuxtApp.vueApp.component('Textarea', Textarea);
    nuxtApp.vueApp.component('TieredMenu', TieredMenu);
    nuxtApp.vueApp.component('Timeline', Timeline);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('Toolbar', Toolbar);
    nuxtApp.vueApp.component('ToggleButton', ToggleButton);
    nuxtApp.vueApp.component('Tree', Tree);
    nuxtApp.vueApp.component('TreeSelect', TreeSelect);
    nuxtApp.vueApp.component('TreeTable', TreeTable);
    nuxtApp.vueApp.component('TriStateCheckbox', TriStateCheckbox);
    nuxtApp.vueApp.component('Galleria', Galleria);
    nuxtApp.vueApp.component('VirtualScroller', VirtualScroller);

    nuxtApp.vueApp.component('DocSections', DocSections);
    nuxtApp.vueApp.component('DocSectionText', DocSectionText);
    nuxtApp.vueApp.component('DocSectionCode', DocSectionCode);
    nuxtApp.vueApp.component('DocSectionNav', DocSectionNav);
    nuxtApp.vueApp.component('DocApiSection', DocApiSection);
    nuxtApp.vueApp.component('DocComponent', DocComponent);

    nuxtApp.vueApp.component('DevelopmentSection', DevelopmentSection);
});
