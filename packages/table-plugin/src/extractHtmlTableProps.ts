import { StyleProp } from 'react-native';
import {
  constructStyles,
  HtmlAttributesDictionary,
  PassProps
} from 'react-native-render-html';
import extractHtmlAndStatsFromTableDomNode from './extractHtmlAndStatsFromTableDomNode';
import { HTMLTableProps } from './types';

/**
 * Extract props for the HTMLTable component from renderer function arguments.
 * This function is especially usefull for custom table renderers.
 *
 * @param htmlAttribs - The HTML node attributes.
 * @param convertedCSSStyles - Converted inline styles.
 * @param passProps - Passed props.
 *
 * @public
 */
export default function extractHtmlTableProps(
  htmlAttribs: HtmlAttributesDictionary,
  convertedCSSStyles: StyleProp<any>,
  passProps: PassProps<any>
): HTMLTableProps<any> {
  const {
    WebView,
    onLinkPress,
    defaultWebViewProps,
    key,
    domNode,
    renderersProps: { table: tableConfig } = {}
  } = passProps;
  const { html, stats } = extractHtmlAndStatsFromTableDomNode(domNode);
  const style = constructStyles({
    tagName: 'table',
    htmlAttribs,
    passProps,
    styleSet: 'VIEW',
    additionalStyles: convertedCSSStyles,
    baseFontStyle: passProps.baseFontStyle
  });

  if (__DEV__ && !WebView) {
    console.warn(
      "@native-html/table-plugin: You must pass a WebView component from react-native-webview as a prop to the HTML component. The iframe won't be rendered."
    );
  }
  return {
    ...tableConfig,
    ...stats,
    key,
    html,
    style,
    onLinkPress,
    webViewProps: defaultWebViewProps,
    WebView
  };
}
