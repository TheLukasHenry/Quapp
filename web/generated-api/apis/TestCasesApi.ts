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
  CreateTestCaseInput,
  TestCase,
} from '../models';
import {
    CreateTestCaseInputFromJSON,
    CreateTestCaseInputToJSON,
    TestCaseFromJSON,
    TestCaseToJSON,
} from '../models';

export interface TestCasesIdDeleteRequest {
    id: number;
}

export interface TestCasesIdGetRequest {
    id: number;
}

export interface TestCasesIdPutRequest {
    id: number;
    testCase?: TestCase;
}

export interface TestCasesPostRequest {
    createTestCaseInput?: CreateTestCaseInput;
}

/**
 * 
 */
export class TestCasesApi extends runtime.BaseAPI {

    /**
     */
    async testCasesGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TestCase>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/TestCases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TestCaseFromJSON));
    }

    /**
     */
    async testCasesGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TestCase>> {
        const response = await this.testCasesGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async testCasesIdDeleteRaw(requestParameters: TestCasesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling testCasesIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/TestCases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testCasesIdDelete(requestParameters: TestCasesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testCasesIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testCasesIdGetRaw(requestParameters: TestCasesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TestCase>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling testCasesIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/TestCases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TestCaseFromJSON(jsonValue));
    }

    /**
     */
    async testCasesIdGet(requestParameters: TestCasesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TestCase> {
        const response = await this.testCasesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async testCasesIdPutRaw(requestParameters: TestCasesIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TestCase>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling testCasesIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/TestCases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TestCaseToJSON(requestParameters.testCase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TestCaseFromJSON(jsonValue));
    }

    /**
     */
    async testCasesIdPut(requestParameters: TestCasesIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TestCase> {
        const response = await this.testCasesIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async testCasesPostRaw(requestParameters: TestCasesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TestCase>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/TestCases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTestCaseInputToJSON(requestParameters.createTestCaseInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TestCaseFromJSON(jsonValue));
    }

    /**
     */
    async testCasesPost(requestParameters: TestCasesPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TestCase> {
        const response = await this.testCasesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
