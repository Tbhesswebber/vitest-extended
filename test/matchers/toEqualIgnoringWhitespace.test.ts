import * as matcher from "../../src/matchers/toEqualIgnoringWhitespace";

expect.extend(matcher);

describe(".toEqualIgnoringWhitespace", () => {
  it("should pass if strings are equal ignoring white-space", (config) => {
    config.expect('SELECT * from TABLE WHERE CONDITION = "5"')
      .toEqualIgnoringWhitespace(`
            SELECT * from TABLE
            WHERE CONDITION = "5"
        `);

    config.expect('SELECT * from TABLE WHERE CONDITION = "5"')
      .toEqualIgnoringWhitespace(`
            SELECT 
            * 
            from 
            TABLE 
            WHERE 
            CONDITION="5"
        `);

    config.expect(`
            diff.forEach((diffObject) => {
                if(diffObject.value.trim())
                    return;
                diffObject.added = diffObject.removed = undefined;
            });
        `).toEqualIgnoringWhitespace(`
            diff.forEach((diffObject) => {
                if(diffObject.value.trim()) return;
                diffObject.added = diffObject.removed = undefined;
            });
        `);

    config
      .expect(() =>
        expect(".class { cssRule: value; }").toEqualIgnoringWhitespace(
          "#id { cssRule: value; }"
        )
      )
      .toThrowErrorMatchingSnapshot();
  });

  it("should not pass if strings are not equal, ignoring white-space", (config) => {
    config.expect('SELECT * from TABLE WHERE CONDITION = "5"').not
      .toEqualIgnoringWhitespace(`
            WHERE CONDITION = "5" 
            SELECT * from TABLE
        `);

    config.expect('SELECT * from TABLE WHERE CONDITION = "5"').not
      .toEqualIgnoringWhitespace(`
            SELECT * from TABLE
            WHERE CONDITION = "555"
        `);

    config.expect('SELECT * from TABLE WHERE CONDITION = "5"').not
      .toEqualIgnoringWhitespace(`
            WHERE CONDITION = "5"
        `);

    config.expect('SELECT * from TABLE WHERE CONDITION = "5"').not
      .toEqualIgnoringWhitespace(`
            select * from table 
            where condition="5"
    `);

    config.expect(`
            import React from 'react';
        `).not.toEqualIgnoringWhitespace(`
            import {Component} from 'react';
        `);

    config
      .expect(() =>
        expect(".class { cssRule: value; }").not.toEqualIgnoringWhitespace(`
            .class { 
                cssRule: value; 
            }
        `)
      )
      .toThrowErrorMatchingSnapshot();
  });

  it("should fail if strings are not equal, ignoring white-space", (config) => {
    config
      .expect(() =>
        expect('SELECT * from TABLE WHERE CONDITION = "5"')
          .toEqualIgnoringWhitespace(`
        WHERE CONDITION = "5" 
        SELECT * from TABLE
      `)
      )
      .toThrowErrorMatchingSnapshot();
  });
});
