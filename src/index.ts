import * as vscode from 'vscode'
import { convertPunctuation, isChinesePunctuation, matchRegex } from './converter'

export function activate() {
  vscode.workspace.onDidChangeTextDocument(async (changeEvent) => {
    const { contentChanges } = changeEvent
    const editor = vscode.window.activeTextEditor

    if (!editor || changeEvent.reason !== undefined)
      return

    contentChanges.forEach((change) => {
      const prevChar = editor.document.getText(
        new vscode.Range(
          change.range.start,
          new vscode.Position(change.range.start.line, change.range.start.character - 1),
        ),
      )
      if (change.text.length > 1 || !isChinesePunctuation(change.text) || !matchRegex.test(prevChar))
        return

      editor.edit((editBuilder) => {
        editBuilder.replace(
          new vscode.Range(
            change.range.start,
            new vscode.Position(change.range.start.line, change.range.start.character + 1),
          ),
          convertPunctuation(change.text),
        )
      })
    })
  })
}

export function deactivate() {}
