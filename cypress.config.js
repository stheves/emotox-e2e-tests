const fs = require('fs');
const { defineConfig } = require('cypress');
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');
const ReportGenerator = require('lighthouse/lighthouse-core/report/report-generator');
const { pa11y } = require('@cypress-audit/pa11y');

module.exports = defineConfig({
    projectId: 'up1ey2',
    e2e: {
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser = {}, launchOptions) => {
                prepareAudit(launchOptions);
                if (browser.name === 'chrome' && browser.isHeadless) {
                    launchOptions.args.push('--disable-gpu');
                    return launchOptions;
                }
            });

            on('task', {
                lighthouse: lighthouse(lighthouseReport => {
                    fs.writeFileSync(
                        'build/cypress/lhreport.html',
                        ReportGenerator.generateReport(
                            lighthouseReport.lhr,
                            'html',
                        ),
                    );
                }),
                pa11y: pa11y(console.log.bind(console)),
            });
        },
    },
    reporter: 'junit',
    lighthouse: {
        thresholds: {
            performance: 0,
            accessibility: 90,
            'best-practices': 90,
            seo: 90,
            pwa: 40,
        },
    },
});
