  define(function () {
      var out = {};

      // translations must set this key for their language to be available in
      // the language dropdowns that are shown throughout Cryptpad's interface
      out._languageName = 'Dutch';

      out.main_title = "Cryptpad: Real-time samenwerking zonder voorkennis";
      out.main_slogan = "Eendracht maakt macht - Samenwerking is de sleutel"; // Der Slogan sollte evtl. besser englisch bleiben.

      out.type = {};
      out.type.pad = 'Pad';
      out.type.code = 'Code';
      out.type.poll = 'Overzicht';
      out.type.slide = 'Presentatie';

      out.common_connectionLost = 'Server verbinding verbroken';

      out.disconnected = 'Geschieden';
      out.synchronizing = 'Synchroniseren';
      out.reconnecting = 'Verbinding is hersteld...';
      out.lag = 'Lag';
      out.readonly = 'Alleen lezen';
      out.anonymous = "Anonymous";
      out.yourself = "Je";
      out.anonymousUsers = "anonyme Gebruikers*binnen";
      out.anonymousUser = "anonyme Gebruiker*in";
      out.users = "Gebruiker*binnen";
      out.and = "en";
      out.viewer = "Waarnemer*in";
      out.viewers = "Waarnemer*binnen";
      out.editor = "Redacteur*in";
      out.editors = "Redacteur*binnen";

      out.greenLight = "Alles werkt perfect";
      out.orangeLight = "Uw trage verbinding kan uw gebruik beïnvloeden";
      out.redLight = "Je bent losgekoppeld van deze sessie";

      out.importButtonTitle = 'Importeer een lokaal bestand in dit document';

      out.exportButtonTitle = 'Exporteer dit document naar een lokaal bestand';
      out.exportPrompt = 'Hoe zou je het bestand willen noemen?';


      out.changeNamePrompt = 'Verander je naam (of laat het leeg om anoniem deel te nemen): ';

      out.clickToEdit = "Klik hier om te bewerken";

      out.forgetButtonTitle = 'Dit document te verwijderen uit uw lijst startpaginas';
      out.forgetPrompt = 'Door op OK te klikken, wordt het document verwijderd uit uw lokale geheugen. Doorgaan?';

      out.shareButton = 'Delen';
      out.shareSuccess = 'URL is gekopieerd naar het klembord';

      out.presentButtonTitle = "Presentatie modus starten";
      out.presentSuccess = 'Klik op ESC om de presentatie modus te verlaten';

      out.backgroundButtonTitle = 'Verander de achtergrondkleur van de presentatie';
      out.colorButtonTitle = 'Verander de tekstkleur in presentatiemodus';

      out.editShare = "Mitarbeits-URL teilen";
      out.editShareTitle = "Mitarbeits-URL in die Zwischenablage kopieren";
      out.viewShare = "Nur-Lesen-URL teilen";
      out.viewShareTitle = "Nur-Lesen-URL in die Zwischenablage kopieren";
      out.viewOpen = "In neuem Tab anzeigen";
      out.viewOpenTitle = "Dokument im Nur-Lesen-Modus in neuem Tab öffnen.";

      out.notifyJoined = "{0} de gezamenlijke vergadering toegetreden";
      out.notifyRenamed = "{0} nu genoemd {1}";
      out.notifyLeft = "{0} heeft de gezamenlijke vergadering vertrokken";

      out.tryIt = 'Probier\'s uit!';

      out.okButton = 'OK (enter)';
      out.cancelButton = 'Afbreken (esc)';

      // Polls

      out.poll_title = "Nul-kennis Datumsplaner";
      out.poll_subtitle = "Nul-kennis, <em>realtime</em> plan";

      out.poll_p_save = "Uw instellingen worden automatisch automatisch opgeslagen.";
      out.poll_p_encryption = "Alle inzendingen wordt gecodeerd, zodat alleen mensen die in het bezit zijn van de toegang schakels. Zelfs de server niet weet wat je veranderen.";

      out.wizardLog = "Klik op de knop om terug te keren naar de enquête de linkerbovenhoek.";
      out.wizardTitle = "Gebruik om de wizard te maken om uw enquête.";
      out.wizardConfirm = "Ben je echt klaar voor de gespecificeerde opties al toe te voegen aan uw poll?";

      out.poll_closeWizardButton = "Assistenten sluiten";
      out.poll_closeWizardButtonTitle = "Assistenten sluiten";
      out.poll_wizardComputeButton = "Opties te aanvaarden";
      out.poll_wizardClearButton = "Tabel leegmaken";
      out.poll_wizardDescription = "Maakt automatisch de opties door elk nummer is input van data en tijden.";
      out.poll_wizardAddDateButton = "+ Datum";
      out.poll_wizardAddTimeButton = "+ Tijden";

      out.poll_optionPlaceholder = "Optie";
      out.poll_userPlaceholder = "Uw Naam";
      out.poll_removeOption = "Weet je zeker dat je deze optie wilt verwijderen?";
      out.poll_removeUser = "Weet u zeker dat u deze gebruikers*bij het verwijderen?";

      out.poll_titleHint = "Titel";
      out.poll_descriptionHint = "Beschrijving";

      // index.html

      out.main_howitworks = 'Hoe het werkt';
      out.main_p2 = 'Dit project maakt gebruik van de <a href="http://ckeditor.com/">CKEditor</a> visuele Editor, <a href="https://codemirror.net/">CodeMirror</a>, en van <a href="https://github.com/xwiki-contrib/chainpad">ChainPad</a> realtime engine.';
      out.main_howitworks_p1 = 'CryptPad maakt gebruik van een variant van de <a href="https://en.wikipedia.org/wiki/Operational_transformation">Operational transformation</a> Algoritme. Dit kan met behulp van de <a href="https://bitcoin.org/bitcoin.pdf">Nakamoto Blockchain</a>, een construct door de <a href="https://de.wikipedia.org/wiki/Bitcoin">Bitcoin</a>-Project Werd beroemd voor gedistribueerde consensus (distributed consensus) te finden. Zo hoeft het algoritme niet berusten op een centrale server om conflicten op te lossen &mdash; Dus de server moet niets van de inhoud van de pads te weten. ';

      out.main_about_p2 = 'Voor vragen en opmerkingen kunt u contact met ons opnemen <a href="https://twitter.com/cryptpad">tweeten</a>, een Ticket <a href="https://github.com/xwiki-labs/cryptpad/issues/" title="our issue tracker">of Github openen</a>, hi zeggen op irc (<a href="http://webchat.freenode.net?channels=%23cryptpad&uio=MT1mYWxzZSY5PXRydWUmMTE9Mjg3JjE1PXRydWUe7" title="freenode webchat">irc.freenode.net</a>), of <a href="mailto:research@xwiki.com">een mail verzenden</a>.';

      out.button_newpad = 'NIEUW WYSIWYG-PAD MAKEN';
      out.button_newcode = 'NIEUW CODE-PAD MAKEN';
      out.button_newpoll = 'NIEUW STEM MAKEN';
      out.button_newslide = 'NIEUW PRESENTATIE MAKEN';

      // privacy.html

      out.policy_title = 'Cryptpad Datenschutzbestimmungen';
      out.policy_whatweknow = 'Was wir über dich wissen';
      out.policy_whatweknow_p1 = 'Als Programm, das im Web gehostet wird, hat Cryptpad Zugriff auf die Metadaten, die vom HTTP-Protokoll exponiert werden. Inbegriffen ist deine IP-Adresse und diverse andere HTTP-Header, die es ermöglichen deinen Browser zu identifizieren. Um zu sehen welche Daten dein Browser preis gibt kanst du die Seite <a target="_blank" rel="noopener noreferrer" href="https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending" title="what http headers is my browser sending">WhatIsMyBrowser.com</a> besuchen.';
      out.policy_whatweknow_p2 = 'Wir nutzen <a href="https://piwik.org/" target="_blank" rel="noopener noreferrer" title="open source analytics platform">Piwik</a>, eine open source Analyseplatform um mehr über unsere Nutzer*innen zu lernen. Piwik teilt uns mit, wie du Cryptpad gefunden hast &mdash; durch direkten Zugriff, mit Hilfe eine Suchmaschine oder über einen Link auf einer anderen Seite wie z.B. Reddit oder Twitter. Außerdem lernen wir mehr über deinen Besuch, welchen Link du auf den Informationsseiten klickst und wie lange du auf diesen Seiten verweilst.';
      out.policy_howweuse = 'Wie wir das Wissen anwenden';
      out.policy_howweuse_p1 = 'Wir nutzen diese Informationen um besser entscheiden zu können wie Cryptpad beworben werden kann und um genutzte Strategien zu evaluieren. Informationen über deinen Standort helfen uns abzuschätzen welche Sprachen wir besser unterstützen sollten.';
      out.policy_howweuse_p2 = "Informationen zu deinem Browser (ob du auf einem Desktop oder Smartphone arbeitest) hilft uns außerdem dabei zu entscheiden, welche Features priorisiert werden sollen. Unser Entwicklerteam ist klein, deshalb ist es uns wichtig Entscheidungen derart zu treffen, dass die Erfahrung der größten Zahl von Nutzer*innen verbessert wird.";
      out.policy_whatwetell = 'Was wir anderen über die erzählen';
      out.policy_whatwetell_p1 = 'Wir reichen keine von uns gesammelten Daten weiter, außer im Falle einer gerichtlichen Anordnung.';
      out.policy_links = 'Links zu anderen Seiten';
      out.policy_links_p1 = 'Diese Seite beinhaltet Links zu anderen Seiten, teilweise werden diese von anderen Organisationen verwaltet. Wir sind nicht für den Umgang mit der Privatsphäre und die Inhalte der anderen Seiten verantwortlich. Generell werden Links zu externen Seiten in einem neuem Fenster geöffnet, um zu verdeutlichen, dass du Cryptpad.fr verlässt.';
      out.policy_ads = 'Werbung';
      out.policy_ads_p1 = 'Wir zeigen keine Onlinewerbung, können aber zu Organisationen verlinken, die unsere Forschung finanzieren.';
      out.policy_choices = 'Deine Möglichkeiten';
      out.policy_choices_open = 'Unser Code ist open source, deshalb kannst du jederzeit deine eigene Cryptpad-Instanz hosten.';
      out.policy_choices_vpn = 'Wenn du unsere gehostete Instanz nutzen möchtest bitten wir dich darum IP-Adresse zu verschleiern, das geht zum Beispiel mit dem <a href="https://www.torproject.org/projects/torbrowser.html.en" title="downloads vor Torproject" target="_blank" rel="noopener noreferrer">Tor browser bundle</a>, oder einem <a href="https://riseup.net/en/vpn" title="VPNs provided by Riseup" target="_blank" rel="noopener noreferrer">VPN-Zugang</a>.';
      out.policy_choices_ads = 'Wenn du unsere Analysesoftware blockieren möchtest kannst du Adblock-Software wie <a href="https://www.eff.org/privacybadger" title="download privacy badger" target="_blank" rel="noopener noreferrer">Privacy Badger</a> verwenden.';

      // terms.html

      out.tos_title = "Cryptpad Nutzungsbedingungen";
      out.tos_legal = "Sei nicht bösartig, missbrauchend und mach nichts illegales.";
      out.tos_availability = "Wir hoffen, dass dir dieser Service nützt, aber Erreichbarkeit und Performanz können nicht garantiert werden. Bitte exportiere deine Daten regelmäßig.";
      out.tos_e2ee = "Cryptpad Dokumente können von allen gelesen oder bearbeitet werden, die den \"fragment identifier\" des Dokuments erraten oder auf eine andere Art davon erfahren. Wir empfehlen dir Ende-Zu-Ende verschlüsselte Nachrichtentechnik (e2ee) zum Versenden der URLs zu nutzen. Wir übernehmen keine Haftung falls eine URL erschlichen oder abgegriffen wird.";
      out.tos_logs = "Metadaten, die dein Browser bereitstellt, können geloggt werden, um den Service aufrechtzuerahlten.";
      out.tos_3rdparties = "Wir geben keine Individualdaten an dritte Weiter, außer auf richterliche Anordnung.";

      // BottomBar.html

      out.bottom_france = '<a href="http://www.xwiki.com/" target="_blank" rel="noopener noreferrer">Mit <img class="bottom-bar-heart" src="/customize/heart.png" /> in <img class="bottom-bar-fr" src="/customize/fr.png" /> gemacht</a>';
      out.bottom_support = '<a href="http://labs.xwiki.com/" title="XWiki Labs" target="_blank" rel="noopener noreferrer">Ein <img src="/customize/logo-xwiki2.png" alt="XWiki SAS" class="bottom-bar-xwiki"/> Labs Project </a> mit Hilfe von <a href="http://ng.open-paas.org/" title="OpenPaaS::ng" target="_blank" rel="noopener noreferrer"> <img src="/customize/openpaasng.png" alt="OpenPaaS-ng" class="bottom-bar-openpaas" /></a>';

      // Header.html

      out.header_france = '<a href="http://www.xwiki.com/" target="_blank" rel="noopener noreferrer">Mit <img class="bottom-bar-heart" src="/customize/heart.png" /> von <img class="bottom-bar-fr" src="/customize/fr.png" title="France" alt="France"/> und <img src="/customize/logo-xwiki.png" alt="XWiki SAS" class="bottom-bar-xwiki"/></a>';


      // TODO Hardcode cause YOLO
      //out.header_xwiki = '<a href="http://www.xwiki.com/" target="_blank" rel="noopener noreferrer"><img src="/customize/logo-xwiki.png" alt="XWiki SAS" class="bottom-bar-xwiki"/></a>';
      out.header_support = '<a href="http://ng.open-paas.org/" title="OpenPaaS::ng" target="_blank" rel="noopener noreferrer"> <img src="/customize/openpaasng.png" alt="OpenPaaS-ng" class="bottom-bar-openpaas" /></a>';
      out.header_logoTitle = 'Zur Hauptseite';

      return out;
  });
