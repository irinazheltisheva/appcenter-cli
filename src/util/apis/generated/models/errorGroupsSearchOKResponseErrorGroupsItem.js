/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ErrorGroupsSearchOKResponseErrorGroupsItem.
 */
class ErrorGroupsSearchOKResponseErrorGroupsItem {
  /**
   * Create a ErrorGroupsSearchOKResponseErrorGroupsItem.
   * @property {string} state Possible values include: 'open', 'closed',
   * 'ignored'
   * @property {string} [annotation]
   * @property {string} errorGroupId
   * @property {string} appVersion
   * @property {string} [appBuild]
   * @property {number} count
   * @property {number} deviceCount
   * @property {date} firstOccurrence
   * @property {date} lastOccurrence
   * @property {string} [exceptionType]
   * @property {string} [exceptionMessage]
   * @property {string} [exceptionClassName]
   * @property {boolean} [exceptionClassMethod]
   * @property {string} [exceptionMethod]
   * @property {boolean} [exceptionAppCode]
   * @property {string} [exceptionFile]
   * @property {string} [exceptionLine]
   * @property {string} [codeRaw]
   * @property {array} [reasonFrames]
   * @property {boolean} [hidden]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorGroupsSearchOKResponseErrorGroupsItem
   *
   * @returns {object} metadata of ErrorGroupsSearchOKResponseErrorGroupsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorGroupsSearchOKResponse_errorGroupsItem',
      type: {
        name: 'Composite',
        className: 'ErrorGroupsSearchOKResponseErrorGroupsItem',
        modelProperties: {
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          annotation: {
            required: false,
            serializedName: 'annotation',
            type: {
              name: 'String'
            }
          },
          errorGroupId: {
            required: true,
            serializedName: 'errorGroupId',
            type: {
              name: 'String'
            }
          },
          appVersion: {
            required: true,
            serializedName: 'appVersion',
            type: {
              name: 'String'
            }
          },
          appBuild: {
            required: false,
            serializedName: 'appBuild',
            type: {
              name: 'String'
            }
          },
          count: {
            required: true,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          deviceCount: {
            required: true,
            serializedName: 'deviceCount',
            type: {
              name: 'Number'
            }
          },
          firstOccurrence: {
            required: true,
            serializedName: 'firstOccurrence',
            type: {
              name: 'DateTime'
            }
          },
          lastOccurrence: {
            required: true,
            serializedName: 'lastOccurrence',
            type: {
              name: 'DateTime'
            }
          },
          exceptionType: {
            required: false,
            serializedName: 'exceptionType',
            type: {
              name: 'String'
            }
          },
          exceptionMessage: {
            required: false,
            serializedName: 'exceptionMessage',
            type: {
              name: 'String'
            }
          },
          exceptionClassName: {
            required: false,
            serializedName: 'exceptionClassName',
            type: {
              name: 'String'
            }
          },
          exceptionClassMethod: {
            required: false,
            serializedName: 'exceptionClassMethod',
            type: {
              name: 'Boolean'
            }
          },
          exceptionMethod: {
            required: false,
            serializedName: 'exceptionMethod',
            type: {
              name: 'String'
            }
          },
          exceptionAppCode: {
            required: false,
            serializedName: 'exceptionAppCode',
            type: {
              name: 'Boolean'
            }
          },
          exceptionFile: {
            required: false,
            serializedName: 'exceptionFile',
            type: {
              name: 'String'
            }
          },
          exceptionLine: {
            required: false,
            serializedName: 'exceptionLine',
            type: {
              name: 'String'
            }
          },
          codeRaw: {
            required: false,
            serializedName: 'codeRaw',
            type: {
              name: 'String'
            }
          },
          reasonFrames: {
            required: false,
            serializedName: 'reasonFrames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorGroupsSearchOKResponseErrorGroupsItemReasonFramesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorGroupsSearchOKResponseErrorGroupsItemReasonFramesItem'
                  }
              }
            }
          },
          hidden: {
            required: false,
            serializedName: 'hidden',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorGroupsSearchOKResponseErrorGroupsItem;