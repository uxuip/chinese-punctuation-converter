import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "chinese-punctuation-converter" is now active!')

  const disposable = vscode.commands.registerCommand('chinese-punctuation-converter.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from chinese-punctuation-converter!')
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {}
