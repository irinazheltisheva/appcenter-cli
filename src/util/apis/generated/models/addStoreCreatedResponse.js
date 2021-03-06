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
 * Class representing a AddStoreCreatedResponse.
 */
class AddStoreCreatedResponse {
  /**
   * Create a AddStoreCreatedResponse.
   * @property {string} id Unique id for the release destination
   */
  constructor() {
  }

  /**
   * Defines the metadata of AddStoreCreatedResponse
   *
   * @returns {object} metadata of AddStoreCreatedResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AddStoreCreatedResponse',
      type: {
        name: 'Composite',
        className: 'AddStoreCreatedResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AddStoreCreatedResponse;
