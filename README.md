#### 概要

カスタムメタデータタイプはSummer 2015で正式リリースされ、開発者はカスタムのパッケージ可能なレコードの作成が可能です。

このサンプルアプリケーションではどのようにカスタムメタデータタイプを使って、SalesforceFoundation/Cumulus の設定マネージャー(<a href="https://github.com/SalesforceFoundation/Cumulus/blob/dev/src/pages/STG_SettingsManager.page">Settings Manager</a>)の様な標準的な設定ページを作成するかを説明しています。
カスタムメタデータタイプはカスタム設定のリストや設定用に作成したカスタムオブジェクトより優れています。後者の場合はインストール前のスクリプトやデータを手動でロードするなどの処理を各環境で行わなければなりません。カスタムメタデータ型はこの様なプロセスを自動化します。

さらに他の利点として、カスタムメタデータのレコードはメモリに保持され、SOQLのガバナから除外されるため、SOQLのリミットをより広く使うことができます。

このサンプルアプリケーションは <a href="https://github.com/financialforcedev/apex-mdapi">Apex metadata wrapper api</a> フレームワークを利用しています。

以下がUIのプレビューです :

![MConfiguration App Demo Screenshot](https://github.com/SalesforceDevelopersJapan/JP-SFDCConfig/blob/master/images/Configuration.png)

カスタムメタデータは多くの組織へデプロイを行う際の負担を軽減します :

![Deploy to prod Screenshot](https://github.com/SalesforceDevelopersJapan/JP-SFDCConfig/blob/master/images/DeployToProd.png)

カスタムメタデータはメタデータを持つパッケージの配布を助けます :

![ISV intallation Screenshot](https://github.com/SalesforceDevelopersJapan/JP-SFDCConfig/blob/master/images/ISVInstallation.png)
