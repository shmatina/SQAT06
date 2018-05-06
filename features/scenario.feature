Feature: Figure 1
 I Search Figure 1

  Scenario: search Figure 1
    Given I go to Figure 1 
    When  I sign up with valid credentials
    Then  I should logged into the page
