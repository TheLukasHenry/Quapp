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

import * as runtime from '../runtime'
import type { CreateFeatureInput, Feature } from '../models'
import {
  CreateFeatureInputFromJSON,
  CreateFeatureInputToJSON,
  FeatureFromJSON,
  FeatureToJSON,
} from '../models'

export interface FeaturesCompanyCompanyIdGetRequest {
  companyId: number
}

export interface FeaturesFeatureIdDeleteRequest {
  featureId: number
}

export interface FeaturesPostRequest {
  createFeatureInput?: CreateFeatureInput
}

export interface FeaturesPutRequest {
  feature?: Feature
}

/**
 *
 */
export class FeaturesApi extends runtime.BaseAPI {
  /**
   */
  async featuresCompanyCompanyIdGetRaw(
    requestParameters: FeaturesCompanyCompanyIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<Feature>>> {
    if (
      requestParameters.companyId === null ||
      requestParameters.companyId === undefined
    ) {
      throw new runtime.RequiredError(
        'companyId',
        'Required parameter requestParameters.companyId was null or undefined when calling featuresCompanyCompanyIdGet.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/Features/company/{companyId}`.replace(
          `{${'companyId'}}`,
          encodeURIComponent(String(requestParameters.companyId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(FeatureFromJSON)
    )
  }

  /**
   */
  async featuresCompanyCompanyIdGet(
    requestParameters: FeaturesCompanyCompanyIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<Feature>> {
    const response = await this.featuresCompanyCompanyIdGetRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   */
  async featuresFeatureIdDeleteRaw(
    requestParameters: FeaturesFeatureIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.featureId === null ||
      requestParameters.featureId === undefined
    ) {
      throw new runtime.RequiredError(
        'featureId',
        'Required parameter requestParameters.featureId was null or undefined when calling featuresFeatureIdDelete.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/Features/{featureId}`.replace(
          `{${'featureId'}}`,
          encodeURIComponent(String(requestParameters.featureId))
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.VoidApiResponse(response)
  }

  /**
   */
  async featuresFeatureIdDelete(
    requestParameters: FeaturesFeatureIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.featuresFeatureIdDeleteRaw(requestParameters, initOverrides)
  }

  /**
   */
  async featuresGetRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<Feature>>> {
    const queryParameters: any = {}
    console.log('get geeere')
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/Features`,
        method: 'GET',
        headers: headerParameters,
        // query: queryParameters,
      },

      { cache: 'no-store' }
      //   {
      //     next: { revalidate: 1 },
      //   }
    )
    console.log('get geeere after')

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(FeatureFromJSON)
    )
  }

  /**
   */
  async featuresGet(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<Feature>> {
    const response = await this.featuresGetRaw(initOverrides)
    return await response.value()
  }

  /**
   */
  async featuresPostRaw(
    requestParameters: FeaturesPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Feature>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/Features`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreateFeatureInputToJSON(requestParameters.createFeatureInput),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      FeatureFromJSON(jsonValue)
    )
  }

  /**
   */
  async featuresPost(
    requestParameters: FeaturesPostRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Feature> {
    const response = await this.featuresPostRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   */
  async featuresPutRaw(
    requestParameters: FeaturesPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Feature>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/Features`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: FeatureToJSON(requestParameters.feature),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      FeatureFromJSON(jsonValue)
    )
  }

  /**
   */
  async featuresPut(
    requestParameters: FeaturesPutRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Feature> {
    const response = await this.featuresPutRaw(requestParameters, initOverrides)
    return await response.value()
  }
}
