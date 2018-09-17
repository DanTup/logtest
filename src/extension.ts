import * as vs from 'vscode';

export let loggingWorked = false;
const onLogEmitter: vs.EventEmitter<string> = new vs.EventEmitter<string>();
export const onLog: vs.Event<string> = onLogEmitter.event;
export function log(message: string) {
    onLogEmitter.fire(message);
}

export function activate(context: vs.ExtensionContext) {
    context.subscriptions.push(vs.commands.registerCommand("test.logToConsole", startLogging));
}

async function startLogging() {
    onLog((s) => {
        console.log(s);
        loggingWorked = true;
    });
    console.log("Log is set up!");
}

export function deactivate() {
}
