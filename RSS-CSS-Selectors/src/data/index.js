export const dataLocalStorage = {
    currentLevel: 0,
    completeLevels: [],
    completeLevelsWithHelp: [],
};

export const dataLevels = [
    {
        title: 'Select squares',
        selectorName: 'X',
        selectorDescription: 'The CSS type selector matches elements by node name.',
        markup: `
            <square class="animate-pulse">
            </square>
            <square class="animate-pulse">
            </square>
        `,
        answer: 'square',
    },
    {
        title: 'Select a square',
        selectorName: 'X',
        selectorDescription: 'The CSS type selector matches elements by node name.',
        markup: `
            <square class="animate-pulse">
            </square>
            <triangle>
            </triangle>
        `,
        answer: 'square',
    },
    {
        title: 'Select a black triangle',
        selectorName: '.X',
        selectorDescription: 'The class selector selects all elements with that class attribute.',
        markup: `
            <triangle>
            </triangle>
            <triangle class="some-class animate-pulse">
            </triangle>
            <square>
            </square>
        `,
        answer: '.some-class',
    },
    {
        title: 'Select a white triangle',
        selectorName: '#X',
        selectorDescription: `The CSS ID selector matches an element based on the value of the element's id attribute.`,
        markup: `
            <triangle id="some-id" class="animate-pulse">
            </triangle>
            <triangle class="some-class">
            </triangle>
            <square>
            </square>
        `,
        answer: '#some-id',
    },
    {
        title: 'Select a triangle in a square',
        selectorName: 'X Y',
        selectorDescription:
            'The descendant selector matches all elements that are descendants of a specified element.',
        markup: `
            <square>
            </square>
            <square>
                <triangle class="animate-pulse">
                </triangle>
            </square>
            <triangle>
            </triangle>
        `,
        answer: 'square triangle',
    },
    {
        title: 'Select all figures',
        selectorName: '*',
        selectorDescription: 'The CSS universal selector (*) matches elements of any type.',
        markup: `
            <square class="animate-pulse">
            </square>
            <square class="animate-pulse">
                <triangle class="animate-pulse">
                </triangle>
            </square>
            <triangle class="animate-pulse">
            </triangle>
            <square class="animate-pulse">
            </square>
        `,
        answer: '*',
    },
    {
        title: `Select every triangle that's next to a square`,
        selectorName: 'X + Y',
        selectorDescription:
            'The adjacent sibling selector is used to select an element that is directly after another specific element.',
        markup: `
            <square>
            </square>
            <triangle class="animate-pulse">
            </triangle>
            <square>
            </square>
            <triangle class="animate-pulse">
            </triangle>
        `,
        answer: 'square + triangle',
    },
    {
        title: `Select the triangles beside the square`,
        selectorName: 'X ~ Y',
        selectorDescription:
            'The general sibling selector selects all elements that are next siblings of a specified element.',
        markup: `
            <square>
            </square>
            <triangle class="animate-pulse">
            </triangle>
            <triangle class="animate-pulse">
            </triangle>
        `,
        answer: 'square ~ triangle',
    },
    {
        title: `Select the top triangle`,
        selectorName: ':first-child',
        selectorDescription:
            'The :first-child CSS pseudo-class represents the first element among a group of sibling elements.',
        markup: `
            <square>
                <triangle class="first animate-pulse">
                </triangle>
                <triangle>
                </triangle>
            </square>
            <triangle>
            </triangle>
        `,
        answer: 'square :first-child',
    },
    {
        title: `Select triangles in squares`,
        selectorName: ':not',
        selectorDescription: 'The :not() CSS pseudo-class represents elements that do not match a list of selectors',
        markup: `
            <triangle class="some-class">
            </triangle>
            <square>
                <triangle class="animate-pulse">
                </triangle>
            </square>
            <square>
                <triangle class="animate-pulse">
                </triangle>
            </square>
        `,
        answer: 'triangle:not(.some-class)',
    },
];

export const keyLocalStorage = 'css_selectors_game_vs8';
