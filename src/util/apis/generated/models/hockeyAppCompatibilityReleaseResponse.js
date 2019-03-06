/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a HockeyAppCompatibilityReleaseResponse.
 */
class HockeyAppCompatibilityReleaseResponse {
  /**
   * Create a HockeyAppCompatibilityReleaseResponse.
   * @member {number} [id]
   * @member {string} [shortversion]
   * @member {string} [version]
   * @member {date} [uploadedAt]
   * @member {number} [appsize]
   * @member {string} [notes]
   * @member {boolean} [mandatory]
   * @member {boolean} [external]
   * @member {string} [deviceFamily]
   * @member {string} [minimumOsVersion]
   */
  constructor() {
  }

  /**
   * Defines the metadata of HockeyAppCompatibilityReleaseResponse
   *
   * @returns {object} metadata of HockeyAppCompatibilityReleaseResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HockeyAppCompatibilityReleaseResponse',
      type: {
        name: 'Composite',
        className: 'HockeyAppCompatibilityReleaseResponse',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          shortversion: {
            required: false,
            serializedName: 'shortversion',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          uploadedAt: {
            required: false,
            serializedName: 'uploaded_at',
            type: {
              name: 'DateTime'
            }
          },
          appsize: {
            required: false,
            serializedName: 'appsize',
            type: {
              name: 'Number'
            }
          },
          notes: {
            required: false,
            serializedName: 'notes',
            type: {
              name: 'String'
            }
          },
          mandatory: {
            required: false,
            serializedName: 'mandatory',
            type: {
              name: 'Boolean'
            }
          },
          external: {
            required: false,
            serializedName: 'external',
            type: {
              name: 'Boolean'
            }
          },
          deviceFamily: {
            required: false,
            serializedName: 'device_family',
            type: {
              name: 'String'
            }
          },
          minimumOsVersion: {
            required: false,
            serializedName: 'minimum_os_version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HockeyAppCompatibilityReleaseResponse;