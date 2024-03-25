// TODO: update format with new JSON
export type SaveMyExamsData = {
  "props": {
    "pageProps": {
      "basePath": string,
      "breadcrumbs": {
        "slugs": {
          "level": string,
          "subject": string,
          "board": string,
          "year": string,
          "resource": string,
          "section": string,
          "topic": string,
          "subtopic": string,
          "area": string,
          "subarea": string
        },
        "edition": string,
        "titles": {
          "level": string,
          "subject": string,
          "board": string,
          "year": string,
          "section": string,
          "topic": string,
          "area": string,
          "subarea": string
        },
        "hashes": {
          "level": string,
          "subject": string,
          "board": string,
          "year": string,
          "section": string,
          "topic": string,
          "area": string,
          "subarea": string
        },
        "metaTitle": string,
        "metaDescription": string,
        "courseIconClass": string,
        "extraResources": string[][]
      },
      "post": {
        "pathHash": string,
        "postHash": string,
        "postContent": null,
        "postStatus": string,
        "postType": string,
        "postCreated": string,
        "postUpdated": string,
        "authorHash": string,
        "authorName": string,
        "authorBio": string,
        "authorPicture": string
      },
      "pages": ([{
        "hash": string,
        "type": string,
        "problem": [
          {
            "body": string,
            "type": string
          }
        ],
        "choiceA": [
          {
            "body": string,
            "type": string
          }
        ] | [],
        "choiceB": [
          {
            "body": string,
            "type": string
          }
        ] | [],
        "choiceC": [
          {
            "body": string,
            "type": string
          }
        ] | [],
        "choiceD": [
          {
            "body": string,
            "type": string
          }
        ] | [],
        "correctChoice": string,
        "solution": [
          {
            "body": string,
            "type": string,
            "updated": string
          }
        ],
        "difficulty": string,
        "marks": number,
        "calculator": true,
        "source": string,
        "sourcePaperYear": null,
        "sourcePaperNumber": null,
        "sourceQuestionNumber": null,
        "sourceQuestionSubpart": null,
        "video": {},
        "page": number,
        "order": number,
        "status": string,
        "specpoints": [
          "Characteristics of Living Organisms"
        ]
      }])[],
      "subjectColor": string,
      "pageData": {
        "postHash": string
      },
      "postHash": string,
      "pdfUrl": null,
      "noIndex": false,
      "difficulties": [
        [
          "easy",
          {
            "title": string,
            "pathHash": string,
            "pdfUrl": null,
            "postHash": string
          }
        ],
        [
          "medium",
          {
            "title": string,
            "pathHash": string,
            "pdfUrl": null,
            "postHash": string
          }
        ],
        [
          "hard",
          {
            "title": string,
            "pathHash": string,
            "pdfUrl": null,
            "postHash": string
          }
        ]
      ],
      "revisionNoteCount": number,
      "customCanonical": string,
      "user": null,
      "title": string,
      "metaTitle": string,
      "metaDescription": string,
      "smeVersion": string,
      "_sentryTraceData": string,
      "_sentryBaggage": string
    },
    "__N_SSP": true
  },
  "page": string,
  "query": {
    "level": string,
    "subject": string,
    "board": string,
    "year": string,
    "resource": string,
    "section": string,
    "topic": string,
    "subtopic": string,
    "area": string,
    "subarea": string
  },
  "buildId": string,
  "assetPrefix": string,
  "runtimeConfig": {
    "baseUrl": string,
    "attachmentDomain": string,
    "pdfApiUrl": string,
    "pdfBucketName": string,
    "supertokensGatewayPath": string,
    "usersnapNpsProjectApiKey": string,
    "usersnapKey": string,
    "sentryEnvironment": string,
    "recaptchaSiteKey": string,
    "rudderstackWriteKey": string,
    "rudderstackDataPlaneUrl": string,
    "stripePublicKey": string,
    "pdfjsExpressKey": string,
    "gbpAnnualPriceId": string,
    "gbpQuarterlyPriceId": string,
    "gbpMonthlyPriceId": string,
    "usdAnnualPriceId": string,
    "usdQuarterlyPriceId": string,
    "usdMonthlyPriceId": string,
    "gbpUkAnnualPriceId": string,
    "ukPricingExperimentMonthlyPrice": string,
    "googleAnalyticsMeasurementId": string,
    "trustpilotReviewCount": string,
    "experimentClientKey": string,
    "appEnv": string,
    "sentryDSN": string,
    "sentryFrontendSampling": string,
    "sentryTraceSampling": number
  },
  "isFallback": false,
  "gssp": true,
  "scriptLoader": []
}