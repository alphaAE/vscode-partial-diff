import {EXTENSION_ID} from './const';
import * as vscode from 'vscode';

export default class ConfigStore {
    private readonly workspace: typeof vscode.workspace;

    constructor(workspace: typeof vscode.workspace) {
        this.workspace = workspace;
    }

    get<T>(configName: string): T {
        const extensionConfig = this.workspace.getConfiguration(EXTENSION_ID);
        return extensionConfig.get(configName) as T;
    }
}
