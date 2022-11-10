# Copyright (c) Microsoft Corporation.
# Licensed under the MIT License.

"""A module containing all the e2e model related benchmarks."""

from superbench.benchmarks.model_benchmarks.model_base import ModelBenchmark
from superbench.benchmarks.model_benchmarks.pytorch_bert import PytorchBERT
from superbench.benchmarks.model_benchmarks.pytorch_gpt2 import PytorchGPT2
from superbench.benchmarks.model_benchmarks.pytorch_cnn import PytorchCNN
from superbench.benchmarks.model_benchmarks.pytorch_lstm import PytorchLSTM
#import superbench.benchmarks.model_benchmarks.sync_hooks as sync_hooks
__all__ = ['ModelBenchmark', 'PytorchBERT', 'PytorchGPT2', 'PytorchCNN', 'PytorchLSTM', 'sync_hooks']
