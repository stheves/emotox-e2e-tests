describe('Audit', () => {
    beforeEach(() => {
        cy.visit('/shop');
        cy.clickCookiesBtn('Akzeptieren');
    });
    it('passes the audits', () => {
        const desktopConfig = {
            formFactor: 'desktop',
            screenEmulation: {
                width: 1920,
                height: 1080,
                deviceScaleRatio: 1,
                mobile: false,
                disable: false,
            },
            throttlingMethod: 'provided',
            // throttling: {
            //     throughputKbps: 8000,
            //     downloadThroughputKbps: 8000,
            //     uploadThroughputKbps: 2000,
            // },
            // formFactor: 'desktop',
            // screenEmulation: {
            //     width: 1350,
            //     height: 940,
            //     deviceScaleRatio: 1,
            //     mobile: false,
            //     disable: false,
            // },
            // throttling: {
            //     rttMs: 10,
            //     throughputKbps: 11024,
            //     // throughputKbps: 0,
            //     // cpuSlowdownMultiplier: 1,
            //     requestLatencyMs: 0,
            //     downloadThroughputKbps: 0,
            //     uploadThroughputKbps: 0,
            // },
        };

        cy.lighthouse(undefined, desktopConfig);
        cy.pa11y({ threshold: 999 });
    });
});
