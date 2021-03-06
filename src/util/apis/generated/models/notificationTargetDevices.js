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
 * Notification target devices. If null, all devices will be
 * targeted(broadcast).
 *
 */
class NotificationTargetDevices {
  /**
   * Create a NotificationTargetDevices.
   * @property {string} type Possible values include: 'audiences_target',
   * 'devices_target', 'user_ids_target', 'account_ids_target',
   * 'broadcast_target'
   * @property {array} devices List of target devices.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NotificationTargetDevices
   *
   * @returns {object} metadata of NotificationTargetDevices
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'devices_target',
      type: {
        name: 'Composite',
        className: 'NotificationTargetDevices',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          devices: {
            required: true,
            serializedName: 'devices',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UuidElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationTargetDevices;
