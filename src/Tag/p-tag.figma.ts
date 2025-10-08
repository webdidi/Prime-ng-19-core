import figma, { html } from '@figma/code-connect/html';

figma.connect('https://www.figma.com/design/9ERzMI9457zlkUpMs9x3Mf/GEDIPAS---Prime-NG-19-core?node-id=3352-5457&m=dev', {
  props: {
    label: figma.textContent('Label'),
  },
  example: ({label}) => html`<p-tag>${label}</p-tag>,
})
