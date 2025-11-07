/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type React from 'react';
import { Box } from 'ink';
import { theme } from '../semantic-colors.js';

export interface StickyHeaderProps {
  children: React.ReactNode;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({ children }) => (
  <Box
    sticky
    minHeight={1}
    width="100%"
    stickyChildren={
      <Box
        borderStyle="single"
        width="100%"
        opaque
        borderColor={theme.ui.dark}
        borderTop={false}
        borderLeft={false}
        borderRight={false}
        paddingX={1}
      >
        {children}
      </Box>
    }
  >
    <Box paddingX={1} width="100%">
      {children}
    </Box>
  </Box>
);
