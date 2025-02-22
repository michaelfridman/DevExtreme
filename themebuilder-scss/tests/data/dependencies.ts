/* eslint-disable spellcheck/spell-checker */
export const dependencies: FlatStylesDependencies = {
  loadindicator: [],
  loadpanel: ['loadindicator'],
  validation: [],
  button: ['validation'],
  popup: ['validation', 'button'],
  toast: [],
  popover: ['validation', 'button', 'popup'],
  actionsheet: ['validation', 'button', 'popup', 'popover'],
  textbox: ['validation', 'button', 'loadindicator'],
  scrollview: ['loadindicator', 'loadpanel'],
  list: ['validation', 'button', 'loadindicator', 'loadpanel', 'scrollview'],
  autocomplete: ['validation', 'button', 'loadindicator', 'textbox', 'popup', 'loadpanel', 'scrollview', 'list'],
  box: [],
  buttongroup: ['validation', 'button'],
  dropdownbutton: ['validation', 'button', 'buttongroup', 'popup', 'loadindicator', 'loadpanel', 'scrollview', 'list'],
  calendar: ['validation', 'button'],
  checkbox: ['validation'],
  numberbox: ['validation', 'button', 'loadindicator'],
  colorbox: ['validation', 'button', 'loadindicator', 'numberbox', 'textbox', 'popup'],
  selectbox: ['validation', 'button', 'loadindicator', 'textbox', 'popup', 'loadpanel', 'scrollview', 'list', 'checkbox'],
  datebox: ['validation', 'button', 'loadindicator', 'textbox', 'popup', 'calendar', 'numberbox', 'loadpanel', 'scrollview', 'list', 'checkbox', 'selectbox', 'box'],
  drawer: [],
  deferrendering: ['loadindicator'],
  dropdownbox: ['validation', 'button', 'loadindicator', 'textbox', 'popup'],
  progressbar: ['validation'],
  fileuploader: ['validation', 'button', 'progressbar'],
  multiview: [],
  tabs: ['validation', 'button'],
  tabpanel: ['multiview', 'validation', 'button', 'tabs'],
  responsivebox: ['box'],
  form: ['validation', 'multiview', 'button', 'tabs', 'tabpanel', 'box', 'responsivebox', 'loadindicator', 'textbox', 'numberbox', 'checkbox', 'popup', 'calendar', 'loadpanel', 'scrollview', 'list', 'selectbox', 'datebox'],
  gallery: [],
  toolbar: ['validation', 'button', 'popup', 'popover', 'loadindicator', 'loadpanel', 'scrollview'],
  contextmenu: ['validation', 'button', 'loadindicator', 'textbox'],
  htmleditor: ['validation', 'button', 'popup', 'popover', 'loadindicator', 'loadpanel', 'scrollview', 'toolbar', 'textbox', 'list', 'checkbox', 'selectbox', 'numberbox', 'multiview', 'tabs', 'tabpanel', 'box', 'responsivebox', 'calendar', 'datebox', 'form', 'buttongroup', 'colorbox', 'progressbar', 'fileuploader', 'contextmenu'],
  sortable: [],
  lookup: ['validation', 'button', 'loadindicator', 'textbox', 'popup', 'loadpanel', 'scrollview', 'list', 'popover'],
  map: [],
  navbar: ['validation', 'button', 'tabs'],
  radiogroup: ['validation'],
  tooltip: ['validation', 'button', 'popup', 'popover'],
  slider: ['validation', 'button', 'popup', 'popover', 'tooltip'],
  rangeslider: ['validation', 'button', 'popup', 'popover', 'tooltip', 'slider'],
  speeddialaction: [],
  switch: ['validation'],
  tagbox: ['validation', 'button', 'loadindicator', 'textbox', 'popup', 'loadpanel', 'scrollview', 'list', 'checkbox', 'selectbox'],
  textarea: ['validation', 'button', 'loadindicator', 'textbox'],
  tileview: ['loadindicator', 'loadpanel', 'scrollview'],
  slideoutview: [],
  slideout: ['slideoutview', 'validation', 'button', 'loadindicator', 'loadpanel', 'scrollview', 'list'],
  accordion: [],
  treeview: ['validation', 'button', 'loadindicator', 'textbox', 'checkbox'],
  menu: ['validation', 'button', 'loadindicator', 'textbox', 'contextmenu', 'checkbox', 'treeview'],
  filterbuilder: ['validation', 'button', 'loadindicator', 'textbox', 'checkbox', 'treeview', 'popup', 'numberbox', 'loadpanel', 'scrollview', 'list', 'selectbox', 'calendar', 'box', 'datebox'],
  datagrid: ['loadindicator', 'loadpanel', 'validation', 'button', 'textbox', 'contextmenu', 'popup', 'popover', 'scrollview', 'toolbar', 'checkbox', 'treeview', 'numberbox', 'list', 'selectbox', 'calendar', 'box', 'datebox', 'multiview', 'tabs', 'tabpanel', 'responsivebox', 'form', 'menu', 'filterbuilder', 'buttongroup', 'dropdownbutton', 'sortable'],
  treelist: ['loadindicator', 'loadpanel', 'validation', 'button', 'textbox', 'contextmenu', 'popup', 'popover', 'scrollview', 'toolbar'],
  pivotgrid: ['loadindicator', 'loadpanel', 'validation', 'button', 'popup', 'textbox', 'checkbox', 'treeview', 'scrollview', 'list', 'contextmenu'],
  scheduler: ['validation', 'button', 'popup', 'loadindicator', 'loadpanel', 'multiview', 'tabs', 'tabpanel', 'box', 'responsivebox', 'textbox', 'numberbox', 'checkbox', 'calendar', 'scrollview', 'list', 'selectbox', 'datebox', 'form', 'buttongroup', 'radiogroup', 'textarea', 'tagbox', 'switch', 'popover', 'tooltip', 'toolbar', 'dropdownbutton'],
  filemanager: ['toast', 'validation', 'button', 'loadindicator', 'textbox', 'contextmenu', 'checkbox', 'treeview', 'loadpanel', 'popup', 'popover', 'scrollview', 'toolbar', 'numberbox', 'list', 'selectbox', 'calendar', 'box', 'datebox', 'multiview', 'tabs', 'tabpanel', 'responsivebox', 'form', 'menu', 'filterbuilder', 'buttongroup', 'dropdownbutton', 'sortable', 'datagrid', 'drawer', 'progressbar', 'fileuploader'],
  diagram: ['loadindicator', 'validation', 'button', 'popup', 'popover', 'loadpanel', 'scrollview', 'toolbar', 'textbox', 'contextmenu', 'list', 'checkbox', 'selectbox', 'numberbox', 'colorbox', 'accordion', 'tooltip', 'multiview', 'tabs', 'tabpanel', 'progressbar', 'fileuploader'],
  gantt: ['loadindicator', 'loadpanel', 'validation', 'button', 'popup', 'multiview', 'tabs', 'tabpanel', 'box', 'responsivebox', 'textbox', 'numberbox', 'checkbox', 'calendar', 'scrollview', 'list', 'selectbox', 'datebox', 'form', 'tagbox', 'radiogroup', 'popover', 'actionsheet', 'toolbar', 'contextmenu', 'treelist', 'treeview', 'menu', 'filterbuilder', 'sortable'],
};
