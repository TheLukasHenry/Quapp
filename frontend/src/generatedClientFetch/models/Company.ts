/* tslint:disable */
/* eslint-disable */
/**
 * ServerC
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Company
 */
export interface Company {
    /**
     * 
     * @type {number}
     * @memberof Company
     */
    companyID?: number;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    companyName?: string | null;
}

/**
 * Check if a given object implements the Company interface.
 */
export function instanceOfCompany(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompanyFromJSON(json: any): Company {
    return CompanyFromJSONTyped(json, false);
}

export function CompanyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Company {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyID': !exists(json, 'companyID') ? undefined : json['companyID'],
        'companyName': !exists(json, 'companyName') ? undefined : json['companyName'],
    };
}

export function CompanyToJSON(value?: Company | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'companyID': value.companyID,
        'companyName': value.companyName,
    };
}

