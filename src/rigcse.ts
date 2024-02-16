import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin'

export const rigcse: CustomThemeConfig = {
  name: 'rigcse',
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `'Google Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-family-heading": `'Google Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "4px",
    "--theme-rounded-container": "4px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "255 255 255",
    "--on-secondary": "0 0 0",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "255 255 255",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #1967d2 
    "--color-primary-50": "221 232 248", // #dde8f8
    "--color-primary-100": "209 225 246", // #d1e1f6
    "--color-primary-200": "198 217 244", // #c6d9f4
    "--color-primary-300": "163 194 237", // #a3c2ed
    "--color-primary-400": "94 149 224", // #5e95e0
    "--color-primary-500": "25 103 210", // #1967d2
    "--color-primary-600": "23 93 189", // #175dbd
    "--color-primary-700": "19 77 158", // #134d9e
    "--color-primary-800": "15 62 126", // #0f3e7e
    "--color-primary-900": "12 50 103", // #0c3267
    // secondary | #497ee5 
    "--color-secondary-50": "228 236 251", // #e4ecfb
    "--color-secondary-100": "219 229 250", // #dbe5fa
    "--color-secondary-200": "210 223 249", // #d2dff9
    "--color-secondary-300": "182 203 245", // #b6cbf5
    "--color-secondary-400": "128 165 237", // #80a5ed
    "--color-secondary-500": "73 126 229", // #497ee5
    "--color-secondary-600": "66 113 206", // #4271ce
    "--color-secondary-700": "55 95 172", // #375fac
    "--color-secondary-800": "44 76 137", // #2c4c89
    "--color-secondary-900": "36 62 112", // #243e70
    // tertiary | #40c4ff 
    "--color-tertiary-50": "226 246 255", // #e2f6ff
    "--color-tertiary-100": "217 243 255", // #d9f3ff
    "--color-tertiary-200": "207 240 255", // #cff0ff
    "--color-tertiary-300": "179 231 255", // #b3e7ff
    "--color-tertiary-400": "121 214 255", // #79d6ff
    "--color-tertiary-500": "64 196 255", // #40c4ff
    "--color-tertiary-600": "58 176 230", // #3ab0e6
    "--color-tertiary-700": "48 147 191", // #3093bf
    "--color-tertiary-800": "38 118 153", // #267699
    "--color-tertiary-900": "31 96 125", // #1f607d
    // success | #28a745 
    "--color-success-50": "223 242 227", // #dff2e3
    "--color-success-100": "212 237 218", // #d4edda
    "--color-success-200": "201 233 209", // #c9e9d1
    "--color-success-300": "169 220 181", // #a9dcb5
    "--color-success-400": "105 193 125", // #69c17d
    "--color-success-500": "40 167 69", // #28a745
    "--color-success-600": "36 150 62", // #24963e
    "--color-success-700": "30 125 52", // #1e7d34
    "--color-success-800": "24 100 41", // #186429
    "--color-success-900": "20 82 34", // #145222
    // warning | #ffc107 
    "--color-warning-50": "255 246 218", // #fff6da
    "--color-warning-100": "255 243 205", // #fff3cd
    "--color-warning-200": "255 240 193", // #fff0c1
    "--color-warning-300": "255 230 156", // #ffe69c
    "--color-warning-400": "255 212 81", // #ffd451
    "--color-warning-500": "255 193 7", // #ffc107
    "--color-warning-600": "230 174 6", // #e6ae06
    "--color-warning-700": "191 145 5", // #bf9105
    "--color-warning-800": "153 116 4", // #997404
    "--color-warning-900": "125 95 3", // #7d5f03
    // error | #dc3545 
    "--color-error-50": "250 225 227", // #fae1e3
    "--color-error-100": "248 215 218", // #f8d7da
    "--color-error-200": "246 205 209", // #f6cdd1
    "--color-error-300": "241 174 181", // #f1aeb5
    "--color-error-400": "231 114 125", // #e7727d
    "--color-error-500": "220 53 69", // #dc3545
    "--color-error-600": "198 48 62", // #c6303e
    "--color-error-700": "165 40 52", // #a52834
    "--color-error-800": "132 32 41", // #842029
    "--color-error-900": "108 26 34", // #6c1a22
    // surface | #17212f 
    "--color-surface-50": "220 222 224", // #dcdee0
    "--color-surface-100": "209 211 213", // #d1d3d5
    "--color-surface-200": "197 200 203", // #c5c8cb
    "--color-surface-300": "162 166 172", // #a2a6ac
    "--color-surface-400": "93 100 109", // #5d646d
    "--color-surface-500": "23 33 47", // #17212f
    "--color-surface-600": "21 30 42", // #151e2a
    "--color-surface-700": "17 25 35", // #111923
    "--color-surface-800": "14 20 28", // #0e141c
    "--color-surface-900": "11 16 23", // #0b1017
  }
}