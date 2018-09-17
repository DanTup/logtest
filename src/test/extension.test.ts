import { log2 } from "../extension";
import * as vs from 'vscode';

suite("Extension Tests", function () {
    test("Something 1", async function () {
        await vs.extensions.getExtension("DanTup.logtest").activate();
        await vs.commands.executeCommand("test.logToConsole");
        log2("11111111111111111111111");
    });
});
