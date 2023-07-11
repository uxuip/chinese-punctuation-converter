import * as vscode from 'vscode'
import { convertPunctuation, isChinesePunctuation } from './converter'

export function activate() {
  vscode.workspace.onDidChangeTextDocument(async (changeEvent) => {
    const { contentChanges } = changeEvent
    const editor = vscode.window.activeTextEditor

    if (!editor || changeEvent.reason !== undefined)
      return

    contentChanges.forEach((change) => {
      if (change.text.length > 1 || !isChinesePunctuation(change.text))
        return

      editor.edit((editBuilder) => {
        const end = new vscode.Position(change.range.start.line, change.range.start.character + 1)
        editBuilder.replace(new vscode.Range(change.range.start, end), convertPunctuation(change.text))
      })
    })
  })
}

export function deactivate() {}
