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
  CreateTestResultInput,
  TestResult,
} from '../models';
import {
    CreateTestResultInputFromJSON,
    CreateTestResultInputToJSON,
    TestResultFromJSON,
    TestResultToJSON,
} from '../models';

export interface TestResultsIdGetRequest {
    id: number;
}

export interface TestResultsPostRequest {
    createTestResultInput?: CreateTestResultInput;
}

/**
 * 
 */
export class TestResultsApi extends runtime.BaseAPI {

    /**
     */
    async testResultsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TestResult>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/TestResults`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TestResultFromJSON));
    }

    /**
     */
    async testResultsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TestResult>> {
        const response = await this.testResultsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async testResultsIdGetRaw(requestParameters: TestResultsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TestResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling testResultsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/TestResults/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TestResultFromJSON(jsonValue));
    }

    /**
     */
    async testResultsIdGet(requestParameters: TestResultsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TestResult> {
        const response = await this.testResultsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async testResultsPostRaw(requestParameters: TestResultsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TestResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/TestResults`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTestResultInputToJSON(requestParameters.createTestResultInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TestResultFromJSON(jsonValue));
    }

    /**
     */
    async testResultsPost(requestParameters: TestResultsPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TestResult> {
        const response = await this.testResultsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
