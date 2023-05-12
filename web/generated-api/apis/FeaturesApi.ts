/* tslint:disable */
/* eslint-disable */
/**
 * ServerC
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateFeatureInput,
  Feature,
} from '../models';
import {
    CreateFeatureInputFromJSON,
    CreateFeatureInputToJSON,
    FeatureFromJSON,
    FeatureToJSON,
} from '../models';

export interface FeaturesCompanyCompanyIdGetRequest {
    companyId: number;
}

export interface FeaturesIdDeleteRequest {
    id: number;
}

export interface FeaturesIdGetRequest {
    id: number;
}

export interface FeaturesPostRequest {
    createFeatureInput?: CreateFeatureInput;
}

export interface FeaturesPutRequest {
    feature?: Feature;
}

/**
 * 
 */
export class FeaturesApi extends runtime.BaseAPI {

    /**
     */
    async featuresCompanyCompanyIdGetRaw(requestParameters: FeaturesCompanyCompanyIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Feature>>> {
        if (requestParameters.companyId === null || requestParameters.companyId === undefined) {
            throw new runtime.RequiredError('companyId','Required parameter requestParameters.companyId was null or undefined when calling featuresCompanyCompanyIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Features/company/{companyId}`.replace(`{${"companyId"}}`, encodeURIComponent(String(requestParameters.companyId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FeatureFromJSON));
    }

    /**
     */
    async featuresCompanyCompanyIdGet(requestParameters: FeaturesCompanyCompanyIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Feature>> {
        const response = await this.featuresCompanyCompanyIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async featuresGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Feature>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Features`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FeatureFromJSON));
    }

    /**
     */
    async featuresGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Feature>> {
        const response = await this.featuresGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async featuresIdDeleteRaw(requestParameters: FeaturesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling featuresIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Features/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async featuresIdDelete(requestParameters: FeaturesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.featuresIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async featuresIdGetRaw(requestParameters: FeaturesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Feature>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling featuresIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Features/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureFromJSON(jsonValue));
    }

    /**
     */
    async featuresIdGet(requestParameters: FeaturesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Feature> {
        const response = await this.featuresIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async featuresPostRaw(requestParameters: FeaturesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Feature>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Features`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateFeatureInputToJSON(requestParameters.createFeatureInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureFromJSON(jsonValue));
    }

    /**
     */
    async featuresPost(requestParameters: FeaturesPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Feature> {
        const response = await this.featuresPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async featuresPutRaw(requestParameters: FeaturesPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Feature>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Features`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FeatureToJSON(requestParameters.feature),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureFromJSON(jsonValue));
    }

    /**
     */
    async featuresPut(requestParameters: FeaturesPutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Feature> {
        const response = await this.featuresPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
