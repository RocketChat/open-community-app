import { ISetting, SettingType } from "@rocket.chat/apps-engine/definition/settings"

const settings: Array<ISetting> = [
    {
        id: 'github_token',
        i18nLabel: "setting_github_token_label",
        i18nDescription: 'setting_github_token_description',
        public: false,
        required: true,
        type: SettingType.PASSWORD,
        packageValue: ''
    }, {
        id: 'github_webhook_secret',
        i18nLabel: "setting_github_webhook_secret_label",
        i18nDescription: 'setting_github_webhook_secret_description',
        public: false,
        required: true,
        type: SettingType.PASSWORD,
        packageValue: ''
    }
]

export { settings }
