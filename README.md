# Plugins for react-native-render-html

[![](https://img.shields.io/discord/736906960041148476?label=discord)](https://discord.gg/3B9twTMEzb)

## Packages

| Package                                                                       | Release                                                                                                                                       | Build Status                                                                                                                                                                     | Coverage                                                                                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@native-html/iframe-plugin](packages/iframe-plugin#readme)                   | [![npm](https://img.shields.io/npm/v/@native-html/iframe-plugin)](https://www.npmjs.com/package/@native-html/iframe-plugin)                   | [![CI](https://github.com/native-html/plugins/workflows/iframe/badge.svg?branch=master)](https://github.com/native-html/plugins/actions?query=branch%3Amaster+workflow%3Aiframe) | [![codecov](https://codecov.io/gh/native-html/plugins/branch/master/graph/badge.svg?flag=iframe-plugin)](https://codecov.io/gh/native-html/plugins?flag=iframe-plugin)                   |
| [@native-html/heuristic-table-plugin](packages/heuristic-table-plugin#readme) | [![npm](https://img.shields.io/npm/v/@native-html/heuristic-table-plugin)](https://www.npmjs.com/package/@native-html/heuristic-table-plugin) | [![CI](https://github.com/native-html/plugins/workflows/table/badge.svg?branch=master)](https://github.com/native-html/plugins/actions?query=branch%3Amaster+workflow%3Atable)   | [![codecov](https://codecov.io/gh/native-html/plugins/branch/master/graph/badge.svg?flag=heuristic-table-plugin)](https://codecov.io/gh/native-html/plugins?flag=heuristic-table-plugin) |
| [@native-html/table-plugin](packages/table-plugin#readme)                     | [![npm](https://img.shields.io/npm/v/@native-html/table-plugin)](https://www.npmjs.com/package/@native-html/table-plugin)                     | [![CI](https://github.com/native-html/plugins/workflows/table/badge.svg?branch=master)](https://github.com/native-html/plugins/actions?query=branch%3Amaster+workflow%3Atable)   | [![codecov](https://codecov.io/gh/native-html/plugins/branch/master/graph/badge.svg?flag=table-plugin)](https://codecov.io/gh/native-html/plugins?flag=table-plugin)                     |

## Plugins Compat Table

| react-native-render-html | iframe                                                                                                    | table                                                                                                                                                                                                                                         | heuristic-table                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ≥ 4.2.1 &lt; 5.0.0       | _No Plugin, iframes were rendered internally_                                                             | 2.x ([documentation](https://github.com/native-html/plugins/tree/rnrh/4.x#readme))                                                                                                                                                            | _No Plugin_                                                                                                        |
| ≥ 5.0.0 &lt; 6.0.0       | 1.x ([documentation](https://github.com/native-html/plugins/tree/rnrh/5.x/packages/iframe-plugin#readme)) | 3.x ([documentation](https://github.com/native-html/plugins/tree/rnrh/5.x/packages/table-plugin#readme))                                                                                                                                      | _No Plugin_                                                                                                        |
| ≥ 6.0.0                  | 2.x ([documentation](https://github.com/native-html/plugins/tree/rnrh/6.x/packages/iframe-plugin#readme)) | 4.x ([documentation](https://github.com/native-html/plugins/tree/@native-html/table-plugin@4.0.3/packages/table-plugin#readme)) <br> 5.x ([documentation](https://github.com/native-html/plugins/tree/rnrh/6.x/packages/table-plugin#readme)) | 0.x ([documentation](https://github.com/native-html/plugins/tree/rnrh/6.x/packages/heuristic-table-plugin#readme)) |
