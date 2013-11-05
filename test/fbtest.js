var testFixture;

var fbTestFixture = {
    'XJS': {
        '<a />': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    range: [1, 2],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 2 }
                    }
                },
                selfClosing: true,
                openingElement: {
                  type: "XJSOpeningElement",
                  name: {
                      type: "XJSIdentifier",
                      name: "a",
                      range: [1, 2],
                      loc: {
                          start: { line: 1, column: 1 },
                          end: { line: 1, column: 2 }
                      }
                  },
                  selfClosing: true,
                  attributes: [],
                  range: [0, 5],
                  loc: {
                      start: { line: 1, column: 0 },
                      end: { line: 1, column: 5 }
                  }
                },
                attributes: [],
                children: [],
                range: [0, 5],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 5 }
                }
            },
            range: [0, 5],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 5 }
            }
        },
        '<n:a n:v />': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    namespace: "n",
                    range: [1, 4],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 4 }
                    }
                },
                selfClosing: true,
                openingElement: {
                  type: "XJSOpeningElement",
                  name: {
                      type: "XJSIdentifier",
                      name: "a",
                      namespace: "n",
                      range: [1, 4],
                      loc: {
                          start: { line: 1, column: 1 },
                          end: { line: 1, column: 4 }
                      }
                  },
                  selfClosing: true,
                  attributes: [
                      {
                          type: "XJSAttribute",
                          name: {
                              type: "XJSIdentifier",
                              name: "v",
                              namespace: "n",
                              range: [5, 8],
                              loc: {
                                  start: { line: 1, column: 5 },
                                  end: { line: 1, column: 8 }
                              }
                          },
                          range: [5, 8],
                          loc: {
                              start: { line: 1, column: 5 },
                              end: { line: 1, column: 8 }
                          }
                      }
                  ],
                  range: [0, 11],
                  loc: {
                      start: { line: 1, column: 0 },
                      end: { line: 1, column: 11 }
                  }
                },
                attributes: [
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "v",
                            namespace: "n",
                            range: [5, 8],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 8 }
                            }
                        },
                        range: [5, 8],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 8 }
                        }
                    }
                ],
                children: [],
                range: [0, 11],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 11 }
                }
            },
            range: [0, 11],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 11 }
            }
        },
        '<a n:foo="bar"> {value} <b><c /></b></a>': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    range: [1, 2],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 2 }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: false,
                    attributes: [
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "foo",
                                namespace: "n",
                                range: [3, 8],
                                loc: {
                                    start: { line: 1, column: 3 },
                                    end: { line: 1, column: 8 }
                                }
                            },
                            value: {
                                type: "Literal",
                                value: "bar",
                                raw: "\"bar\"",
                                range: [9, 14],
                                loc: {
                                    start: { line: 1, column: 9 },
                                    end: { line: 1, column: 14 }
                                }
                            },
                            range: [3, 14],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 14 }
                            }
                        }
                    ],
                    range: [0, 15],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 15 }
                    }
                },
                closingElement: {
                    type: "XJSClosingElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [38, 39],
                        loc: {
                            start: { line: 1, column: 38 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    range: [36, 40],
                    loc: {
                        start: { line: 1, column: 36 },
                        end: { line: 1, column: 40 }
                    }
                },
                attributes: [
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "foo",
                            namespace: "n",
                            range: [3, 8],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 8 }
                            }
                        },
                        value: {
                            type: "Literal",
                            value: "bar",
                            raw: "\"bar\"",
                            range: [9, 14],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        range: [3, 14],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 14 }
                        }
                    }
                ],
                children: [
                    {
                        type: "Literal",
                        value: " ",
                        raw: " ",
                        range: [15, 16],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    {
                        type: "XJSExpressionContainer",
                        expression: {
                            type: "Identifier",
                            name: "value",
                            range: [17, 22],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 22 }
                            }
                        },
                        range: [16, 23],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    {
                        type: "Literal",
                        value: " ",
                        raw: " ",
                        range: [23, 24],
                        loc: {
                            start: { line: 1, column: 23 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    {
                        type: "XJSElement",
                        name: {
                            type: "XJSIdentifier",
                            name: "b",
                            range: [25, 26],
                            loc: {
                                start: { line: 1, column: 25 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        selfClosing: false,
                        openingElement: {
                            type: "XJSOpeningElement",
                            name: {
                                type: "XJSIdentifier",
                                name: "b",
                                range: [25, 26],
                                loc: {
                                    start: { line: 1, column: 25 },
                                    end: { line: 1, column: 26 }
                                }
                            },
                            selfClosing: false,
                            attributes: [],
                            range: [24, 27],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 27 }
                            }
                        },
                        closingElement: {
                            type: "XJSClosingElement",
                            name: {
                                type: "XJSIdentifier",
                                name: "b",
                                range: [34, 35],
                                loc: {
                                    start: { line: 1, column: 34 },
                                    end: { line: 1, column: 35 }
                                }
                            },
                            range: [32, 36],
                            loc: {
                                start: { line: 1, column: 32 },
                                end: { line: 1, column: 36 }
                            }
                        },
                        attributes: [],
                        children: [
                            {
                                type: "XJSElement",
                                name: {
                                    type: "XJSIdentifier",
                                    name: "c",
                                    range: [28, 29],
                                    loc: {
                                        start: { line: 1, column: 28 },
                                        end: { line: 1, column: 29 }
                                    }
                                },
                                selfClosing: true,
                                openingElement: {
                                    type: "XJSOpeningElement",
                                    name: {
                                        type: "XJSIdentifier",
                                        name: "c",
                                        range: [28, 29],
                                        loc: {
                                            start: { line: 1, column: 28 },
                                            end: { line: 1, column: 29 }
                                        }
                                    },
                                    selfClosing: true,
                                    attributes: [],
                                    range: [27, 32],
                                    loc: {
                                        start: { line: 1, column: 27 },
                                        end: { line: 1, column: 32 }
                                    }
                                },
                                attributes: [],
                                children: [],
                                range: [27, 32],
                                loc: {
                                    start: { line: 1, column: 27 },
                                    end: { line: 1, column: 32 }
                                }
                            }
                        ],
                        range: [24, 36],
                        loc: {
                            start: { line: 1, column: 24 },
                            end: { line: 1, column: 36 }
                        }
                    }
                ],
                range: [0, 40],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 40 }
                }
            },
            range: [0, 40],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 40 }
            }
        },
        '<a b={" "} c=" " d="&amp;" />': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    range: [1, 2],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 2 }
                    }
                },
                selfClosing: true,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: true,
                    attributes: [
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "b",
                                range: [3, 4],
                                loc: {
                                    start: { line: 1, column: 3 },
                                    end: { line: 1, column: 4 }
                                }
                            },
                            value: {
                                type: "XJSExpressionContainer",
                                expression: {
                                    type: "Literal",
                                    value: " ",
                                    raw: "\" \"",
                                    range: [6, 9],
                                    loc: {
                                        start: { line: 1, column: 6 },
                                        end: { line: 1, column: 9 }
                                    }
                                },
                                range: [5, 10],
                                loc: {
                                    start: { line: 1, column: 5 },
                                    end: { line: 1, column: 10 }
                                }
                            },
                            range: [3, 10],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 10 }
                            }
                        },
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "c",
                                range: [11, 12],
                                loc: {
                                    start: { line: 1, column: 11 },
                                    end: { line: 1, column: 12 }
                                }
                            },
                            value: {
                                type: "Literal",
                                value: " ",
                                raw: "\" \"",
                                range: [13, 16],
                                loc: {
                                    start: { line: 1, column: 13 },
                                    end: { line: 1, column: 16 }
                                }
                            },
                            range: [11, 16],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 16 }
                            }
                        },
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "d",
                                range: [17, 18],
                                loc: {
                                    start: { line: 1, column: 17 },
                                    end: { line: 1, column: 18 }
                                }
                            },
                            value: {
                                type: "Literal",
                                value: "&",
                                raw: "\"&amp;\"",
                                range: [19, 26],
                                loc: {
                                    start: { line: 1, column: 19 },
                                    end: { line: 1, column: 26 }
                                }
                            },
                            range: [17, 26],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 26 }
                            }
                        }
                    ],
                    range: [0, 29],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 29 }
                    }
                },
                attributes: [
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "b",
                            range: [3, 4],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 4 }
                            }
                        },
                        value: {
                            type: "XJSExpressionContainer",
                            expression: {
                                type: "Literal",
                                value: " ",
                                raw: "\" \"",
                                range: [6, 9],
                                loc: {
                                    start: { line: 1, column: 6 },
                                    end: { line: 1, column: 9 }
                                }
                            },
                            range: [5, 10],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 10 }
                            }
                        },
                        range: [3, 10],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 10 }
                        }
                    },
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "c",
                            range: [11, 12],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 12 }
                            }
                        },
                        value: {
                            type: "Literal",
                            value: " ",
                            raw: "\" \"",
                            range: [13, 16],
                            loc: {
                                start: { line: 1, column: 13 },
                                end: { line: 1, column: 16 }
                            }
                        },
                        range: [11, 16],
                        loc: {
                            start: { line: 1, column: 11 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "d",
                            range: [17, 18],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 18 }
                            }
                        },
                        value: {
                            type: "Literal",
                            value: "&",
                            raw: "\"&amp;\"",
                            range: [19, 26],
                            loc: {
                                start: { line: 1, column: 19 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        range: [17, 26],
                        loc: {
                            start: { line: 1, column: 17 },
                            end: { line: 1, column: 26 }
                        }
                    }
                ],
                children: [],
                range: [0, 29],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 29 }
                }
            },
            range: [0, 29],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 29 }
            }
        },
        '<a\n/>': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    range: [
                        1,
                        2
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 2
                        }
                    }
                },
                selfClosing: true,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [
                            1,
                            2
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 2
                            }
                        }
                    },
                    selfClosing: true,
                    attributes: [],
                    range: [
                        0,
                        5
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 2,
                            column: 2
                        }
                    }
                },
                attributes: [],
                children: [],
                range: [
                    0,
                    5
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 2,
                        column: 2
                    }
                }
            },
            range: [
                0,
                5
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 2,
                    column: 2
                }
            }
        },
        '<日本語></日本語>': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "日本語",
                    range: [
                        1,
                        4
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 4
                        }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "日本語",
                        range: [
                            1,
                            4
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 4
                            }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [
                        0,
                        5
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 5
                        }
                    }
                },
                closingElement: {
                    type: "XJSClosingElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "日本語",
                        range: [
                            7,
                            10
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 7
                            },
                            end: {
                                line: 1,
                                column: 10
                            }
                        }
                    },
                    range: [
                        5,
                        11
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 5
                        },
                        end: {
                            line: 1,
                            column: 11
                        }
                    }
                },
                attributes: [],
                children: [],
                range: [
                    0,
                    11
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 11
                    }
                }
            },
            range: [
                0,
                11
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 11
                }
            }
        },

        '<AbC-def\n  test="&#x0026;&#38;">\nbar\nbaz\n</AbC-def>': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "AbC-def",
                    range: [
                        1,
                        8
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 8
                        }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "AbC-def",
                        range: [
                            1,
                            8
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 8
                            }
                        }
                    },
                    selfClosing: false,
                    attributes: [
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "test",
                                range: [
                                    11,
                                    15
                                ],
                                loc: {
                                    start: {
                                        line: 2,
                                        column: 2
                                    },
                                    end: {
                                        line: 2,
                                        column: 6
                                    }
                                }
                            },
                            value: {
                                type: "Literal",
                                value: "&&",
                                raw: "\"&#x0026;&#38;\"",
                                range: [
                                    16,
                                    31
                                ],
                                loc: {
                                    start: {
                                        line: 2,
                                        column: 7
                                    },
                                    end: {
                                        line: 2,
                                        column: 22
                                    }
                                }
                            },
                            range: [
                                11,
                                31
                            ],
                            loc: {
                                start: {
                                    line: 2,
                                    column: 2
                                },
                                end: {
                                    line: 2,
                                    column: 22
                                }
                            }
                        }
                    ],
                    range: [
                        0,
                        32
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 2,
                            column: 23
                        }
                    }
                },
                closingElement: {
                    type: "XJSClosingElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "AbC-def",
                        range: [
                            43,
                            50
                        ],
                        loc: {
                            start: {
                                line: 5,
                                column: 2
                            },
                            end: {
                                line: 5,
                                column: 9
                            }
                        }
                    },
                    range: [
                        41,
                        51
                    ],
                    loc: {
                        start: {
                            line: 5,
                            column: 0
                        },
                        end: {
                            line: 5,
                            column: 10
                        }
                    }
                },
                attributes: [
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "test",
                            range: [
                                11,
                                15
                            ],
                            loc: {
                                start: {
                                    line: 2,
                                    column: 2
                                },
                                end: {
                                    line: 2,
                                    column: 6
                                }
                            }
                        },
                        value: {
                            type: "Literal",
                            value: "&&",
                            raw: "\"&#x0026;&#38;\"",
                            range: [
                                16,
                                31
                            ],
                            loc: {
                                start: {
                                    line: 2,
                                    column: 7
                                },
                                end: {
                                    line: 2,
                                    column: 22
                                }
                            }
                        },
                        range: [
                            11,
                            31
                        ],
                        loc: {
                            start: {
                                line: 2,
                                column: 2
                            },
                            end: {
                                line: 2,
                                column: 22
                            }
                        }
                    }
                ],
                children: [
                    {
                        type: "Literal",
                        value: "\nbar\nbaz\n",
                        raw: "\nbar\nbaz\n",
                        range: [
                            32,
                            41
                        ],
                        loc: {
                            start: {
                                line: 2,
                                column: 23
                            },
                            end: {
                                line: 5,
                                column: 0
                            }
                        }
                    }
                ],
                range: [
                    0,
                    51
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 5,
                        column: 10
                    }
                }
            },
            range: [
                0,
                51
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 5,
                    column: 10
                }
            }
        },

        '<a b={x ? <c /> : <d />} />': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                name: {
                    type: "XJSIdentifier",
                    name: "a",
                    range: [
                        1,
                        2
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 2
                        }
                    }
                },
                selfClosing: true,
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [
                            1,
                            2
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 2
                            }
                        }
                    },
                    selfClosing: true,
                    attributes: [
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "b",
                                range: [
                                    3,
                                    4
                                ],
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 3
                                    },
                                    end: {
                                        line: 1,
                                        column: 4
                                    }
                                }
                            },
                            value: {
                                type: "XJSExpressionContainer",
                                expression: {
                                    type: "ConditionalExpression",
                                    test: {
                                        type: "Identifier",
                                        name: "x",
                                        range: [
                                            6,
                                            7
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 6
                                            },
                                            end: {
                                                line: 1,
                                                column: 7
                                            }
                                        }
                                    },
                                    consequent: {
                                        type: "XJSElement",
                                        name: {
                                            type: "XJSIdentifier",
                                            name: "c",
                                            range: [
                                                11,
                                                12
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 11
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 12
                                                }
                                            }
                                        },
                                        selfClosing: true,
                                        openingElement: {
                                            type: "XJSOpeningElement",
                                            name: {
                                                type: "XJSIdentifier",
                                                name: "c",
                                                range: [
                                                    11,
                                                    12
                                                ],
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 11
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 12
                                                    }
                                                }
                                            },
                                            selfClosing: true,
                                            attributes: [],
                                            range: [
                                                10,
                                                15
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 10
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 15
                                                }
                                            }
                                        },
                                        attributes: [],
                                        children: [],
                                        range: [
                                            10,
                                            15
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 10
                                            },
                                            end: {
                                                line: 1,
                                                column: 15
                                            }
                                        }
                                    },
                                    alternate: {
                                        type: "XJSElement",
                                        name: {
                                            type: "XJSIdentifier",
                                            name: "d",
                                            range: [
                                                19,
                                                20
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 19
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 20
                                                }
                                            }
                                        },
                                        selfClosing: true,
                                        openingElement: {
                                            type: "XJSOpeningElement",
                                            name: {
                                                type: "XJSIdentifier",
                                                name: "d",
                                                range: [
                                                    19,
                                                    20
                                                ],
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 19
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 20
                                                    }
                                                }
                                            },
                                            selfClosing: true,
                                            attributes: [],
                                            range: [
                                                18,
                                                23
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 18
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 23
                                                }
                                            }
                                        },
                                        attributes: [],
                                        children: [],
                                        range: [
                                            18,
                                            23
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 18
                                            },
                                            end: {
                                                line: 1,
                                                column: 23
                                            }
                                        }
                                    },
                                    range: [
                                        6,
                                        23
                                    ],
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 6
                                        },
                                        end: {
                                            line: 1,
                                            column: 23
                                        }
                                    }
                                },
                                range: [
                                    5,
                                    24
                                ],
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 5
                                    },
                                    end: {
                                        line: 1,
                                        column: 24
                                    }
                                }
                            },
                            range: [
                                3,
                                24
                            ],
                            loc: {
                                start: {
                                    line: 1,
                                    column: 3
                                },
                                end: {
                                    line: 1,
                                    column: 24
                                }
                            }
                        }
                    ],
                    range: [
                        0,
                        27
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 27
                        }
                    }
                },
                attributes: [
                    {
                        type: "XJSAttribute",
                        name: {
                            type: "XJSIdentifier",
                            name: "b",
                            range: [
                                3,
                                4
                            ],
                            loc: {
                                start: {
                                    line: 1,
                                    column: 3
                                },
                                end: {
                                    line: 1,
                                    column: 4
                                }
                            }
                        },
                        value: {
                            type: "XJSExpressionContainer",
                            expression: {
                                type: "ConditionalExpression",
                                test: {
                                    type: "Identifier",
                                    name: "x",
                                    range: [
                                        6,
                                        7
                                    ],
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 6
                                        },
                                        end: {
                                            line: 1,
                                            column: 7
                                        }
                                    }
                                },
                                consequent: {
                                    type: "XJSElement",
                                    name: {
                                        type: "XJSIdentifier",
                                        name: "c",
                                        range: [
                                            11,
                                            12
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 11
                                            },
                                            end: {
                                                line: 1,
                                                column: 12
                                            }
                                        }
                                    },
                                    selfClosing: true,
                                    openingElement: {
                                        type: "XJSOpeningElement",
                                        name: {
                                            type: "XJSIdentifier",
                                            name: "c",
                                            range: [
                                                11,
                                                12
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 11
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 12
                                                }
                                            }
                                        },
                                        selfClosing: true,
                                        attributes: [],
                                        range: [
                                            10,
                                            15
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 10
                                            },
                                            end: {
                                                line: 1,
                                                column: 15
                                            }
                                        }
                                    },
                                    attributes: [],
                                    children: [],
                                    range: [
                                        10,
                                        15
                                    ],
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 10
                                        },
                                        end: {
                                            line: 1,
                                            column: 15
                                        }
                                    }
                                },
                                alternate: {
                                    type: "XJSElement",
                                    name: {
                                        type: "XJSIdentifier",
                                        name: "d",
                                        range: [
                                            19,
                                            20
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 19
                                            },
                                            end: {
                                                line: 1,
                                                column: 20
                                            }
                                        }
                                    },
                                    selfClosing: true,
                                    openingElement: {
                                        type: "XJSOpeningElement",
                                        name: {
                                            type: "XJSIdentifier",
                                            name: "d",
                                            range: [
                                                19,
                                                20
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 19
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 20
                                                }
                                            }
                                        },
                                        selfClosing: true,
                                        attributes: [],
                                        range: [
                                            18,
                                            23
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 18
                                            },
                                            end: {
                                                line: 1,
                                                column: 23
                                            }
                                        }
                                    },
                                    attributes: [],
                                    children: [],
                                    range: [
                                        18,
                                        23
                                    ],
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 18
                                        },
                                        end: {
                                            line: 1,
                                            column: 23
                                        }
                                    }
                                },
                                range: [
                                    6,
                                    23
                                ],
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 6
                                    },
                                    end: {
                                        line: 1,
                                        column: 23
                                    }
                                }
                            },
                            range: [
                                5,
                                24
                            ],
                            loc: {
                                start: {
                                    line: 1,
                                    column: 5
                                },
                                end: {
                                    line: 1,
                                    column: 24
                                }
                            }
                        },
                        range: [
                            3,
                            24
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 3
                            },
                            end: {
                                line: 1,
                                column: 24
                            }
                        }
                    }
                ],
                children: [],
                range: [
                    0,
                    27
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 27
                    }
                }
            },
            range: [
                0,
                27
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 27
                }
            }
        },

        '<a>{}</a>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                name: {
                    type: 'XJSIdentifier',
                    name: 'a',
                    range: [1, 2],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 2 }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [0, 3],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 3 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [7, 8],
                        loc: {
                            start: { line: 1, column: 7 },
                            end: { line: 1, column: 8 }
                        }
                    },
                    range: [5, 9],
                    loc: {
                        start: { line: 1, column: 5 },
                        end: { line: 1, column: 9 }
                    }
                },
                attributes: [],
                children: [{
                    type: 'XJSExpressionContainer',
                    expression: {
                        type: 'XJSEmptyExpression',
                        range: [4, 4],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 4 }
                        }
                    },
                    range: [3, 5],
                    loc: {
                        start: { line: 1, column: 3 },
                        end: { line: 1, column: 5 }
                    }
                }],
                range: [0, 9],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 9 }
                }
            },
            range: [0, 9],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 9 }
            }
        },

        '<a>{/* this is a comment */}</a>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                name: {
                    type: 'XJSIdentifier',
                    name: 'a',
                    range: [1, 2],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 2 }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [0, 3],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 3 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [30, 31],
                        loc: {
                            start: { line: 1, column: 30 },
                            end: { line: 1, column: 31 }
                        }
                    },
                    range: [28, 32],
                    loc: {
                        start: { line: 1, column: 28 },
                        end: { line: 1, column: 32 }
                    }
                },
                attributes: [],
                children: [{
                    type: 'XJSExpressionContainer',
                    expression: {
                        type: 'XJSEmptyExpression',
                        range: [4, 27],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    range: [3, 28],
                    loc: {
                        start: { line: 1, column: 3 },
                        end: { line: 1, column: 28 }
                    }
                }],
                range: [0, 32],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 32 }
                }
            },
            range: [0, 32],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 32 }
            }
        },

        '<div>@test content</div>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                name: {
                    type: 'XJSIdentifier',
                    name: 'div',
                    range: [1, 4],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 4 }
                    }
                },
                selfClosing: false,
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'div',
                        range: [1, 4],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 4 }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [0, 5],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 5 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'div',
                        range: [20, 23],
                        loc: {
                            start: { line: 1, column: 20 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    range: [18, 24],
                    loc: {
                        start: { line: 1, column: 18 },
                        end: { line: 1, column: 24 }
                    }
                },
                attributes: [],
                children: [{
                    type: 'Literal',
                    value: '@test content',
                    raw: '@test content',
                    range: [5, 18],
                    loc: {
                        start: { line: 1, column: 5 },
                        end: { line: 1, column: 18 }
                    }
                }],
                range: [0, 24],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 24 }
                }
            },
            range: [0, 24],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 24 }
            }
        }
    },

    'Invalid XJS Syntax': {
        '</>': {
            index: 1,
            lineNumber: 1,
            column: 2,
            message: 'Error: Line 1: Unexpected token /',
            description: 'Unexpected token /'
        },

        '<a: />': {
            index: 3,
            lineNumber: 1,
            column: 4,
            message: 'Error: Line 1: XJS tag name can not be empty'
        },

        '<:a />': {
            index: 1,
            lineNumber: 1,
            column: 2,
            message: 'Error: Line 1: Unexpected token :',
            description: 'Unexpected token :'
        },

        '<a b=d />': {
            index: 5,
            lineNumber: 1,
            column: 6,
            message: 'Error: Line 1: XJS value should be either an expression or a quoted XJS text'
        },

        '<a>': {
            index: 3,
            lineNumber: 1,
            column: 4,
            message: 'Error: Line 1: Unexpected token '
        },

        '<a></b>': {
            index: 7,
            lineNumber: 1,
            column: 8,
            message: 'Error: Line 1: Expected corresponding XJS closing tag for a'
        },

        '<a foo="bar': {
            index: 11,
            lineNumber: 1,
            column: 12,
            message: "Error: Line 1: Unexpected token ILLEGAL"
        },

        '<a:b></b>': {
            index: 9,
            lineNumber: 1,
            column: 10,
            message: "Error: Line 1: Expected corresponding XJS closing tag for a:b",
        },

        '<a><a />': {
            index: 8,
            lineNumber: 1,
            column: 9,
            message: 'Error: Line 1: Unexpected end of input'
        },

        '<a b={}>': {
            index: 7,
            lineNumber: 1,
            column: 8,
            message: 'Error: Line 1: XJS attributes must only be assigned a non-empty expression'
        },

        '<a>{"str";}</a>': {
            index: 9,
            lineNumber: 1,
            column: 10,
            message: 'Error: Line 1: Unexpected token ;',
            description: 'Unexpected token ;'
        },

        '<span className="a", id="b" />': {
            index: 19,
            lineNumber: 1,
            column: 20,
            message: 'Error: Line 1: Unexpected token ,',
            description: 'Unexpected token ,'
        }
    },

    'Type Annotations': {
        'function foo(numVal: number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'numVal',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'number',
                        range: [21, 27],
                        loc: {
                            start: { line: 1, column: 21 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    paramTypes: null,
                    returnType: null,
                    isNullable: false,
                    range: [21, 27],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [13, 19],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 19 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [28, 30],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 30 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 30],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 30 }
            }
        },

        'function foo(numVal: number, strVal: string){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'numVal',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'number',
                        range: [21, 27],
                        loc: {
                            start: { line: 1, column: 21 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    paramTypes: null,
                    returnType: null,
                    isNullable: false,
                    range: [21, 27],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [13, 19],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 19 }
                }
            }, {
                type: 'Identifier',
                name: 'strVal',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'string',
                        range: [37, 43],
                        loc: {
                            start: { line: 1, column: 37 },
                            end: { line: 1, column: 43 }
                        }
                    },
                    paramTypes: null,
                    returnType: null,
                    isNullable: false,
                    range: [37, 43],
                    loc: {
                        start: { line: 1, column: 37 },
                        end: { line: 1, column: 43 }
                    }
                },
                range: [29, 35],
                loc: {
                    start: { line: 1, column: 29 },
                    end: { line: 1, column: 35 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [44, 46],
                loc: {
                    start: { line: 1, column: 44 },
                    end: { line: 1, column: 46 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 46],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 46 }
            }
        },

        'function foo(numVal: number, untypedVal){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'numVal',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'number',
                        range: [21, 27],
                        loc: {
                            start: { line: 1, column: 21 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    paramTypes: null,
                    returnType: null,
                    isNullable: false,
                    range: [21, 27],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [13, 19],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 19 }
                }
            }, {
                type: 'Identifier',
                name: 'untypedVal',
                range: [29, 39],
                loc: {
                    start: { line: 1, column: 29 },
                    end: { line: 1, column: 39 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [40, 42],
                loc: {
                    start: { line: 1, column: 40 },
                    end: { line: 1, column: 42 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 42],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 42 }
            }
        },

        'function foo(untypedVal, numVal: number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'untypedVal',
                range: [13, 23],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 23 }
                }
            }, {
                type: 'Identifier',
                name: 'numVal',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'number',
                        range: [33, 39],
                        loc: {
                            start: { line: 1, column: 33 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    paramTypes: null,
                    returnType: null,
                    isNullable: false,
                    range: [33, 39],
                    loc: {
                        start: { line: 1, column: 33 },
                        end: { line: 1, column: 39 }
                    }
                },
                range: [25, 31],
                loc: {
                    start: { line: 1, column: 25 },
                    end: { line: 1, column: 31 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [40, 42],
                loc: {
                    start: { line: 1, column: 40 },
                    end: { line: 1, column: 42 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 42],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 42 }
            }
        },

        'function foo(nullableNum: ?number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'nullableNum',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'number',
                        range: [27, 33],
                        loc: {
                            start: { line: 1, column: 27 },
                            end: { line: 1, column: 33 }
                        }
                    },
                    paramTypes: null,
                    returnType: null,
                    isNullable: true,
                    range: [26, 33],
                    loc: {
                        start: { line: 1, column: 26 },
                        end: { line: 1, column: 33 }
                    }
                },
                range: [13, 24],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 24 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [34, 36],
                loc: {
                    start: { line: 1, column: 34 },
                    end: { line: 1, column: 36 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },

        'function foo(callback: () => void){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'callback',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    id: null,
                    paramTypes: [],
                    returnType: null,
                    isNullable: false,
                    range: [23, 33],
                    loc: {
                        start: { line: 1, column: 23 },
                        end: { line: 1, column: 33 }
                    }
                },
                range: [13, 21],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 21 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [34, 36],
                loc: {
                    start: { line: 1, column: 34 },
                    end: { line: 1, column: 36 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },

        'function foo(callback: () => number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'callback',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    id: null,
                    paramTypes: [],
                    returnType: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'number',
                            range: [29, 35],
                            loc: {
                                start: { line: 1, column: 29 },
                                end: { line: 1, column: 35 }
                            }
                        },
                        paramTypes: null,
                        returnType: null,
                        isNullable: false,
                        range: [29, 35],
                        loc: {
                            start: { line: 1, column: 29 },
                            end: { line: 1, column: 35 }
                        }
                    },
                    isNullable: false,
                    range: [23, 35],
                    loc: {
                        start: { line: 1, column: 23 },
                        end: { line: 1, column: 35 }
                    }
                },
                range: [13, 21],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 21 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [36, 38],
                loc: {
                    start: { line: 1, column: 36 },
                    end: { line: 1, column: 38 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 38],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 38 }
            }
        },

        'function foo(callback: (bool) => number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'callback',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    id: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'bool',
                            range: [24, 28],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 28 }
                            }
                        },
                        paramTypes: null,
                        returnType: null,
                        isNullable: false,
                        range: [24, 28],
                        loc: {
                            start: { line: 1, column: 24 },
                            end: { line: 1, column: 28 }
                        }
                    }],
                    returnType: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'number',
                            range: [33, 39],
                            loc: {
                                start: { line: 1, column: 33 },
                                end: { line: 1, column: 39 }
                            }
                        },
                        paramTypes: null,
                        returnType: null,
                        isNullable: false,
                        range: [33, 39],
                        loc: {
                            start: { line: 1, column: 33 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    isNullable: false,
                    range: [23, 39],
                    loc: {
                        start: { line: 1, column: 23 },
                        end: { line: 1, column: 39 }
                    }
                },
                range: [13, 21],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 21 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [40, 42],
                loc: {
                    start: { line: 1, column: 40 },
                    end: { line: 1, column: 42 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 42],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 42 }
            }
        },

        'function foo(callback: (bool, string) => number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'callback',
                typeAnnotation: {
                    type: 'TypeAnnotation',
                    id: null,
                    paramTypes: [{
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'bool',
                            range: [24, 28],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 28 }
                            }
                        },
                        paramTypes: null,
                        returnType: null,
                        isNullable: false,
                        range: [24, 28],
                        loc: {
                            start: { line: 1, column: 24 },
                            end: { line: 1, column: 28 }
                        }
                    }, {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'string',
                            range: [30, 36],
                            loc: {
                                start: { line: 1, column: 30 },
                                end: { line: 1, column: 36 }
                            }
                        },
                        paramTypes: null,
                        returnType: null,
                        isNullable: false,
                        range: [30, 36],
                        loc: {
                            start: { line: 1, column: 30 },
                            end: { line: 1, column: 36 }
                        }
                    }],
                    returnType: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'number',
                            range: [41, 47],
                            loc: {
                                start: { line: 1, column: 41 },
                                end: { line: 1, column: 47 }
                            }
                        },
                        paramTypes: null,
                        returnType: null,
                        isNullable: false,
                        range: [41, 47],
                        loc: {
                            start: { line: 1, column: 41 },
                            end: { line: 1, column: 47 }
                        }
                    },
                    isNullable: false,
                    range: [23, 47],
                    loc: {
                        start: { line: 1, column: 23 },
                        end: { line: 1, column: 47 }
                    }
                },
                range: [13, 21],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 21 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [48, 50],
                loc: {
                    start: { line: 1, column: 48 },
                    end: { line: 1, column: 50 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 50],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 50 }
            }
        },

        'function foo():number{}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [21, 23],
                loc: {
                    start: { line: 1, column: 21 },
                    end: { line: 1, column: 23 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'TypeAnnotation',
                id: {
                    type: 'Identifier',
                    name: 'number',
                    range: [15, 21],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 21 }
                    }
                },
                paramTypes: null,
                returnType: null,
                isNullable: false,
                range: [15, 21],
                loc: {
                    start: { line: 1, column: 15 },
                    end: { line: 1, column: 21 }
                }
            },
            range: [0, 23],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 23 }
            }
        },

        'function foo():() => void{}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [25, 27],
                loc: {
                    start: { line: 1, column: 25 },
                    end: { line: 1, column: 27 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'TypeAnnotation',
                id: null,
                paramTypes: [],
                returnType: null,
                isNullable: false,
                range: [15, 25],
                loc: {
                    start: { line: 1, column: 15 },
                    end: { line: 1, column: 25 }
                }
            },
            range: [0, 27],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 27 }
            }
        },

        'function foo():(bool) => number{}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [31, 33],
                loc: {
                    start: { line: 1, column: 31 },
                    end: { line: 1, column: 33 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'TypeAnnotation',
                id: null,
                paramTypes: [{
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'bool',
                        range: [16, 20],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 20 }
                        }
                    },
                    paramTypes: null,
                    returnType: null,
                    isNullable: false,
                    range: [16, 20],
                    loc: {
                        start: { line: 1, column: 16 },
                        end: { line: 1, column: 20 }
                    }
                }],
                returnType: {
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'number',
                        range: [25, 31],
                        loc: {
                            start: { line: 1, column: 25 },
                            end: { line: 1, column: 31 }
                        }
                    },
                    paramTypes: null,
                    returnType: null,
                    isNullable: false,
                    range: [25, 31],
                    loc: {
                        start: { line: 1, column: 25 },
                        end: { line: 1, column: 31 }
                    }
                },
                isNullable: false,
                range: [15, 31],
                loc: {
                    start: { line: 1, column: 15 },
                    end: { line: 1, column: 31 }
                }
            },
            range: [0, 33],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 33 }
            }
        },

        'a={set fooProp(value:number){}}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'fooProp',
                            range: [7, 14],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [{
                                type: 'Identifier',
                                name: 'value',
                                typeAnnotation: {
                                    type: 'TypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'number',
                                        range: [21, 27],
                                        loc: {
                                            start: { line: 1, column: 21 },
                                            end: { line: 1, column: 27 }
                                        }
                                    },
                                    paramTypes: null,
                                    returnType: null,
                                    isNullable: false,
                                    range: [21, 27],
                                    loc: {
                                        start: { line: 1, column: 21 },
                                        end: { line: 1, column: 27 }
                                    }
                                },
                                range: [15, 20],
                                loc: {
                                    start: { line: 1, column: 15 },
                                    end: { line: 1, column: 20 }
                                }
                            }],
                            defaults: [],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                range: [28, 30],
                                loc: {
                                    start: { line: 1, column: 28 },
                                    end: { line: 1, column: 30 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: false,
                            range: [28, 30],
                            loc: {
                                start: { line: 1, column: 28 },
                                end: { line: 1, column: 30 }
                            }
                        },
                        kind: 'set',
                        method: false,
                        shorthand: false,
                        range: [3, 30],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 30 }
                        }
                    }],
                    range: [2, 31],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 31 }
                    }
                },
                range: [0, 31],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 31 }
                }
            },
            range: [0, 31],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 31 }
            }
        },

        'class Foo {set fooProp(value:number){}}': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'MethodDefinition',
                    key: {
                        type: 'Identifier',
                        name: 'fooProp',
                        range: [15, 22],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 22 }
                        }
                    },
                    value: {
                        type: 'FunctionExpression',
                        id: null,
                        params: [{
                            type: 'Identifier',
                            name: 'value',
                            typeAnnotation: {
                                type: 'TypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'number',
                                    range: [29, 35],
                                    loc: {
                                        start: { line: 1, column: 29 },
                                        end: { line: 1, column: 35 }
                                    }
                                },
                                paramTypes: null,
                                returnType: null,
                                isNullable: false,
                                range: [29, 35],
                                loc: {
                                    start: { line: 1, column: 29 },
                                    end: { line: 1, column: 35 }
                                }
                            },
                            range: [23, 28],
                            loc: {
                                start: { line: 1, column: 23 },
                                end: { line: 1, column: 28 }
                            }
                        }],
                        defaults: [],
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            range: [36, 38],
                            loc: {
                                start: { line: 1, column: 36 },
                                end: { line: 1, column: 38 }
                            }
                        },
                        rest: null,
                        generator: false,
                        expression: false,
                        range: [36, 38],
                        loc: {
                            start: { line: 1, column: 36 },
                            end: { line: 1, column: 38 }
                        }
                    },
                    kind: 'set',
                    'static': false,
                    range: [11, 38],
                    loc: {
                        start: { line: 1, column: 11 },
                        end: { line: 1, column: 38 }
                    }
                }],
                range: [10, 39],
                loc: {
                    start: { line: 1, column: 10 },
                    end: { line: 1, column: 39 }
                }
            },
            range: [0, 39],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 39 }
            }
        },

        'var numVal:number;': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'numVal',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'number',
                            range: [11, 17],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        paramTypes: null,
                        returnType: null,
                        isNullable: false,
                        range: [11, 17],
                        loc: {
                            start: { line: 1, column: 11 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    range: [4, 10],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 10 }
                    }
                },
                init: null,
                range: [4, 17],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 17 }
                }
            }],
            kind: 'var',
            range: [0, 18],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 18 }
            }
        },

        'var numVal:number = otherNumVal;': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: 'numVal',
                    typeAnnotation: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'number',
                            range: [11, 17],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        paramTypes: null,
                        returnType: null,
                        isNullable: false,
                        range: [11, 17],
                        loc: {
                            start: { line: 1, column: 11 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    range: [4, 10],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 10 }
                    }
                },
                init: {
                    type: 'Identifier',
                    name: 'otherNumVal',
                    range: [20, 31],
                    loc: {
                        start: { line: 1, column: 20 },
                        end: { line: 1, column: 31 }
                    }
                },
                range: [4, 31],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 31 }
                }
            }],
            kind: 'var',
            range: [0, 32],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 32 }
            }
        }
    }
};

// Merge fbTestFixture in to testFixture

(function () {

    'use strict';

    var i, fixtures;

    for (i in fbTestFixture) {
        if (fbTestFixture.hasOwnProperty(i)) {
            fixtures = fbTestFixture[i];
            if (i !== 'Syntax' && testFixture.hasOwnProperty(i)) {
                throw new Error('FB test should not replace existing test for ' + i);
            }
            testFixture[i] = fixtures;
        }
    }

}());
