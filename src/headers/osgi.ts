'use strict';

import * as vscode from 'vscode';

export function getStandardOsgiHeaders() {
    return [
        new vscode.CompletionItem('Manifest-Version'),
        new vscode.CompletionItem('Created-By'),
        new vscode.CompletionItem('Signature-Version'),
        new vscode.CompletionItem('Class-Path'),
        new vscode.CompletionItem('Main-Class'),
        new vscode.CompletionItem('Implementation-Version'),
        new vscode.CompletionItem('Implementation-Vendor'),
        new vscode.CompletionItem('Implementation-Vendor-Id'),
        new vscode.CompletionItem('Implementation-URL'),
        new vscode.CompletionItem('Specification-Title'),
        new vscode.CompletionItem('Specification-Version'),
        new vscode.CompletionItem('Specification-Vendor'),
        new vscode.CompletionItem('Sealed'),
        new vscode.CompletionItem('Name'),
        new vscode.CompletionItem('Content-Type'),
        new vscode.CompletionItem('Java-Bean'),
        new vscode.CompletionItem('MD5-Digest'),
        new vscode.CompletionItem('SHA-Digest'),
        new vscode.CompletionItem('Magic'),
        new vscode.CompletionItem('Premain-Class'),
        new vscode.CompletionItem('Agent-Class'),
        new vscode.CompletionItem('Launcher-Agent-Class'),
        new vscode.CompletionItem('Boot-Class-Path'),
        new vscode.CompletionItem('Can-Redefine-Classes'),
        new vscode.CompletionItem('Can-Retransform-Classes'),
        new vscode.CompletionItem('Can-Set-Native-Method-Prefix'),
        new vscode.CompletionItem('Automatic-Module-Name'),
        new vscode.CompletionItem('Multi-Release'),
        // https://www.osgi.org/bundle-headers-reference/
        new vscode.CompletionItem('Bundle-ActivationPolicy'),
        new vscode.CompletionItem('Bundle-Activator'),
        new vscode.CompletionItem('Bundle-Category'),
        new vscode.CompletionItem('Bundle-Classpath'),
        new vscode.CompletionItem('Bundle-ContactAddress'),
        new vscode.CompletionItem('Bundle-Copyright'),
        new vscode.CompletionItem('Bundle-Description'),
        new vscode.CompletionItem('Bundle-DocURL'),
        new vscode.CompletionItem('Bundle-Icon'),
        new vscode.CompletionItem('Bundle-License'),
        new vscode.CompletionItem('Bundle-Localization'),
        new vscode.CompletionItem('Bundle-ManifestVersion'),
        new vscode.CompletionItem('Bundle-Name'),
        new vscode.CompletionItem('Bundle-NativeCode'),
        new vscode.CompletionItem('Bundle-RequiredExecutionEnvironment'),
        new vscode.CompletionItem('Bundle-SymbolicName'),
        new vscode.CompletionItem('Bundle-UpdateLocation'),
        new vscode.CompletionItem('Bundle-Vendor'),
        new vscode.CompletionItem('Bundle-Version'),
        new vscode.CompletionItem('DynamicImport-Package'),
        new vscode.CompletionItem('Eclipse-BuddyPolicy'),
        new vscode.CompletionItem('Eclipse-BuddBundleShapeyPolicy'),
        new vscode.CompletionItem('Eclipse-ExtensibleAPI'),
        new vscode.CompletionItem('Eclipse-PlatformFilter'),
        new vscode.CompletionItem('Eclipse-RegisterBuddy'),
        new vscode.CompletionItem('Export-Package'),
        new vscode.CompletionItem('Export-Service'),
        new vscode.CompletionItem('Fragment-Host'),
        new vscode.CompletionItem('Import-Bundle'),
        new vscode.CompletionItem('Import-Library'),
        new vscode.CompletionItem('Import-Package'),
        new vscode.CompletionItem('Import-Service'),
        new vscode.CompletionItem('Include-Resource	'),
        new vscode.CompletionItem('Module-Scope'),
        new vscode.CompletionItem('Module-Type'),
        new vscode.CompletionItem('Private-Package'),
        new vscode.CompletionItem('Provide-Capability'),
        new vscode.CompletionItem('Require-Bundle'),
        new vscode.CompletionItem('Require-Capability'),
        new vscode.CompletionItem('Web-ContextPath'),
        new vscode.CompletionItem('Web-DispatcherServletUrlPatterns'),
        new vscode.CompletionItem('Web-FilterMappings'),
    ];
}
